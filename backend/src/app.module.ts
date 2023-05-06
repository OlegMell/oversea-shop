import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { ProductsController } from './modules/products/products.controller';

import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { CategoriesController } from './modules/categories/categories.controller';


const ENV = process.env.NODE_ENV; // TODO make replacement for env file by build mode

@Module( {
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.dev`, // TODO make replacement for env file by build mode
    }),
    MongooseModule.forRoot(process.env.DB_URI as string, {
      dbName: process.env.DB_NAME as string,
    }),
    ProductsModule,
    CategoriesModule,
  ],
  controllers: [ AppController, ProductsController, CategoriesController ],
  providers: [],
} )
export class AppModule { }
