//const data = require('../data')
const Product = require('../models/productModel')

const resolvers = {
    Query: {
        getAllProducts: async () => {
            const products = await Product.find({});
            return products;
        },
        getProduct: async (parent, args, context) => {
            const { id } = args;
            const product = await Product.findById(id);
            return product;
        }
    },
};

module.exports = resolvers;