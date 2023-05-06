import mongoose, { Schema } from 'mongoose';


export const productSchema = new mongoose.Schema( {
    title: String,
    description: String,
    images: [ String ],
    prices: {
        price: String,
        oldPrice: String,
    } ,
    createdAt: {
        type: Date,
        default: Date.now
    },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
} );