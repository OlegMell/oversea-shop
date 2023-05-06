import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDTO, CategoryIdDTO } from './categories.dto';


@Controller('categories')
export class CategoriesController {

    constructor(
        private readonly categoriesService: CategoriesService,
    ){}


    // TODO need to be pagination implemented
    @Get()
    async findAll() {
        let allCategories = await this.categoriesService.findAll();
        return allCategories;
    }

    @Get( '/:id' )
    async findById( @Query() catogoryId: CategoryIdDTO ) {
        let category = await this.categoriesService.findById( catogoryId ); // Get a product by Id
        return category; // return the product
    }

    @Post( '/create' )
    async create( @Body() category: CategoryDTO ) {
        let createdCategory = await this.categoriesService.create( category ); // create product
        return createdCategory; // return the created product
    }

    @Post( '/delete' )
    async delete( @Query() categoryId: CategoryIdDTO ) {
        let deletedCategory = await this.categoriesService.delete( categoryId ); // Delete the product
        return deletedCategory; // return the deleted product
    }

}
