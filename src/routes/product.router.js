const express = require('express');
const { getAllProducts, registerProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/product.controlller');

const router = express.Router();


router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', registerProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;