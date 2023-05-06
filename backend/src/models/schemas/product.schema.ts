import mongoose from 'mongoose';


export const productSchema = new mongoose.Schema( {
    title: String,
    description: String,
    image: String,
    price: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
} );