import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Category } from '../../types/category';
import { CategoryDTO, CategoryIdDTO } from './categories.dto';


Injectable()
export class CategoriesService {

    constructor(
        @InjectModel( 'Category' )
        private readonly categoryModel: Model<Category>
    ) { }



    // create a new product and add to the database
    async create( category: CategoryDTO ): Promise<Category> {
        // create a product from the input details
        const createdCategory = new this.categoryModel( category );
        // save the product to your database
        await createdCategory.save();
        // return the saved product
        return createdCategory;
    }

    // getting all products from the db
    async findAll(): Promise<Category[]> {
        // Get and return all products added to your db
        return await this.categoryModel.find()
            .exec();
    }

    // getting product by id
    async findById( categoryId: CategoryIdDTO ): Promise<Category> {
        // get Id from the input for specific items
        const {
            id
        } = categoryId;
        try {
            // Get and return the product from the db based on id
            return await this.categoryModel.findById( id )
                .exec();
        } catch ( error ) {
            // In case of an error, return it as the server error
            throw new HttpException( error, HttpStatus.INTERNAL_SERVER_ERROR );
        }
    }

    // updating a product as existing db
    async update( categoryId: CategoryIdDTO, category: CategoryDTO ): Promise<Category> {
        // get Id from the input for updating details
        const {
            id
        } = categoryId;
        try {
            // Update the product and return it
            return await this.categoryModel.findByIdAndUpdate( id, category, {
                new: true
            } )
                .exec();
        } catch ( error ) {
            // In case of an error, return it
            throw new HttpException( error, HttpStatus.INTERNAL_SERVER_ERROR );
        }
    }

    // deleting a product from the db based on id
    async delete( categoryId: CategoryIdDTO ): Promise<any> {
        // get Id from the input for deleting it
        const {
            id
        } = categoryId;
        try {
            // Delete the product and return it.
            return await this.categoryModel.findByIdAndRemove( id )
                .exec();
        } catch ( error ) {
            // In case of an error, return it.
            throw new HttpException( error, HttpStatus.INTERNAL_SERVER_ERROR );
        }
    }
}

