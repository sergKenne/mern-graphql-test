const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
        default: '/images/p4.jpg',
    },
    price: {
        type: Number,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    material: {
        type: String,
        required: true,
        trim: true,
    },
    size: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    numReviews: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;