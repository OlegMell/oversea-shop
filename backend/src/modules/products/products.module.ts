import {
    Module
} from '@nestjs/common';
// add the controller
import {
    ProductsController
} from './products.controller';
// add the mongoose ORM
import {
    MongooseModule
} from '@nestjs/mongoose';
// add the service
import {
    ProductsService
} from './products.service';
// add the mongoose schema
import {
    productSchema
} from 'src/models/schemas/product.schema';


@Module( {
    // set the schema
    imports: [ MongooseModule.forFeature( [ {
        name: 'Product',
        schema: productSchema
    } ] ) ],
    // add the controller module
    controllers: [ ProductsController ],
    // add the providers module
    providers: [ ProductsService ],
    // exports the service module
    exports: [ ProductsService ]
} )
export class ProductsModule { }