const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const productSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    inventory: {
        type: Number,
        required: true,
        default: 0
    },
    unit: {
        type: String,
        required: true
    }
})

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;