import {
    HttpException,
    HttpStatus,
    Injectable
} from '@nestjs/common';

// Model from mongoose
import {
    Model
} from 'mongoose';
// Import mongoose from nest to execute the database from your project
// Import the types
import {
    Product
} from 'src/types/product';
// Import the DTO interfaces
import {
    ProductDTO,
    ProductIdDTO
} from './products.dto';
import { InjectModel } from '@nestjs/mongoose';


Injectable()
export class ProductsService {

    constructor(
        @InjectModel( 'Product' )
        private readonly productModel: Model<Product>
    ) { }



    // create a new product and add to the database
    async create( product: ProductDTO ): Promise<Product> {
        // create a product from the input details
        const createdProduct = new this.productModel( product );
        // save the product to your database
        await createdProduct.save();
        // return the saved product
        return createdProduct;
    }

    // getting all products from the db
    async findAll(): Promise<Product[]> {
        // Get and return all products added to your db
        return await this.productModel.find()
            .exec();
    }

    // getting product by id
    async findById( productId: ProductIdDTO ): Promise<Product> {
        // get Id from the input for specific items
        const {
            id
        } = productId;
        try {
            // Get and return the product from the db based on id
            return await this.productModel.findById( id )
                .exec();
        } catch ( error ) {
            // In case of an error, return it as the server error
            throw new HttpException( error, HttpStatus.INTERNAL_SERVER_ERROR );
        }
    }

    // updating a product as existing db
    async update( productId: ProductIdDTO, product: ProductDTO ): Promise<Product> {
        // get Id from the input for updating details
        const {
            id
        } = productId;
        try {
            // Update the product and return it
            return await this.productModel.findByIdAndUpdate( id, product, {
                new: true
            } )
                .exec();
        } catch ( error ) {
            // In case of an error, return it
            throw new HttpException( error, HttpStatus.INTERNAL_SERVER_ERROR );
        }
    }

    // deleting a product from the db based on id
    async delete( productId: ProductIdDTO ): Promise<any> {
        // get Id from the input for deleting it
        const {
            id
        } = productId;
        try {
            // Delete the product and return it.
            return await this.productModel.findByIdAndRemove( id )
                .exec();
        } catch ( error ) {
            // In case of an error, return it.
            throw new HttpException( error, HttpStatus.INTERNAL_SERVER_ERROR );
        }
    }
}

