import {
    Body,
    Controller,
    Post,
    Get,
    Query,
    UseGuards
} from '@nestjs/common';
import {
    ProductsService
} from './products.service';
import {
    ProductDTO,
    ProductIdDTO
} from './products.dto';
import { AuthGuard } from '../guards/auth.guard';



@Controller('products')
@UseGuards(AuthGuard)
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
}