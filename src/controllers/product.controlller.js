const productModel = require('../models/product.model');

const getAllProducts = async (req, res) => {
    var products = await productModel.find();
    return res.status(200).json(products);
}

const registerProduct = async (req, res) => {
    const { name, price, inventory, unit  } = req.body;

    try {
        var product = new productModel({
            name,
            price,
            inventory,
            unit
        });
        product = await product.save();
    
        return res.status(200).json(product)
    } catch (error) {
        return res.status(401).send({ error });
    }
    
}

const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await productModel.findOne({
        _id: id
    });

    if (!product) return res.status(401).send({ succes: false, message: 'product not exist' });

    return res.status(200).json(product);
}

const updateProduct = async(req, res) => {
    const { id } = req.params;
    const { name, price, inventory, unit } = req.body;

    try {
        var product = await productModel.findOneAndUpdate({
            _id: id
        }, {
            $set: { name, price, inventory, unit }
        });

        return res.status(200).json(product);

    } catch (error) {
        console.log(error);
        return res.status(401).send({ error });
    }
}

const deleteProduct = async(req, res) => {
    const { id } = req.params;
    try {
        var product = await productModel.findOneAndRemove({
            _id: id
        });

        return res.status(200).json(product);
    } catch (error) {
        return res.status(401).send({ error });
    }
}


module.exports = {
    getAllProducts,
    registerProduct,
    getProductById,
    updateProduct,
    deleteProduct
}