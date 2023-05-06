import {
    Body,
    Controller,
    Post,
    Get,
    Query,
    UseGuards,
    Patch
} from '@nestjs/common';
import {
    ProductsService
} from './products.service';
import {
    ProductDTO,
    ProductIdDTO
} from './products.dto';
import { AuthGuard } from '../../guards/auth.guard';



@Controller('products')
// @UseGuards(AuthGuard)
export class ProductsController {

    constructor(
        private readonly productsService: ProductsService,
    ) {}


    // TODO need to be pagination implemented
    @Get()
    async findAll() {
        let allProducts = await this.productsService.findAll();
        return allProducts;
    }

    @Get( '/:id' )
    async findById( @Query() productId: ProductIdDTO ) {
        let product = await this.productsService.findById( productId ); // Get a product by Id
        return product; // return the product
    }

    @Post( '/create' )
    async create( @Body() product: ProductDTO ) {
        let created_product = await this.productsService.create( product ); // create product
        return created_product; // return the created product
    }

    @Post( '/delete' )
    async delete( @Query() productId: ProductIdDTO ) {
        let deleted_product = await this.productsService.delete( productId ); // Delete the product
        return deleted_product; // return the deleted product
    }

    @Patch('/update')
    async update( @Query() productId: ProductIdDTO, @Body() product: ProductDTO ) {
        console.log( productId );
        console.log(product);
        const updatedProduct = await this.productsService.update(productId, product);
        return updatedProduct;
    }
}