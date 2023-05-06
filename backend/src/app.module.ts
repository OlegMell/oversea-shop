import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { ProductsController } from './products/products.controller';

import { ProductsModule } from './products/products.module';


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
  ],
  controllers: [ AppController, ProductsController ],
  providers: [],
} )
export class AppModule { }
