import mongoose from 'mongoose';

export const categorySchema = new mongoose.Schema({
    title: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
})