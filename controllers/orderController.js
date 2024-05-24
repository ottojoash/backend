const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { user, products, totalPrice } = req.body;
    try {
        const order = new Order({ user, products, totalPrice });
        await order.save();
        res.status(201).json({ message: 'Order created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('products.product');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};
