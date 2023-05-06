import { Document } from 'mongoose';


export interface Product extends Document {
    title: string;
    description: string;
    image: string;
    price: string;
    createdAt: Date;
}