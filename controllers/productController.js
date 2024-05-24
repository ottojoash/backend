const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    const { name, description, price, quantity } = req.body;
    try {
        const product = new Product({ name, description, price, quantity });
        await product.save();
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};
