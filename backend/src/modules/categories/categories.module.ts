import {
    Module
} from '@nestjs/common';
// add the controller

import {
    MongooseModule
} from '@nestjs/mongoose';
// add the service

import {
    categorySchema
} from 'src/models/schemas/category.schema';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';


@Module( {
    // set the schema
    imports: [ MongooseModule.forFeature( [ {
        name: 'Category',
        schema: categorySchema
    } ] ) ],
    // add the controller module
    controllers: [ CategoriesController ],
    // add the providers module
    providers: [ CategoriesService ],
    // exports the service module
    exports: [ CategoriesService ]
} )
export class CategoriesModule { }