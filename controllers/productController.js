
const Product = require('../models/productModel');

const getProducts = async (req, res) => {
    console.log('req.user:', req.user);
    try {
        const products = await Product.find({});
        if (!products) {
            throw new Error('product no found');
        }
        res.status(200).json(products);
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message,
        });
    }
};

const getSingleProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: e.message,
        });
    }
};

module.exports = {
    getProducts,
    getSingleProduct,
};
