const express = require('express');
const app = express();
const connectDB = require('./db.js');
const data = require('./data').products;
const Product = require('./models/productModel');

connectDB();

app.use(express.json());

app.post('/seeder', async (req, res) => {
    try {
        await Product.deleteMany();
        const products = await Product.insertMany(data);
        if (products) {
            console.log('products added successful');
            res.json(products);
            process.exit();
        }
    } catch (e) {
        console.log(e.message);
    }
});

app.listen('6000', () => {
    console.log('server running in port 6000');
});
