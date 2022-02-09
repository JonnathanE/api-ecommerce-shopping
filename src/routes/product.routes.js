const router = require('express').Router();
const { verifyTokenAndAdmin } = require('../middlewares/authJwt');
const { create, update, deleteProduct, getProductById, getAllProducts } = require('../controllers/product.controller');

// CREATE A NEW PRODUCT
router.post('/', verifyTokenAndAdmin, create);
// UPDATE A PRODUCT
router.put('/:id', verifyTokenAndAdmin, update);
// DELETE A PRODUCT
router.delete('/:id', verifyTokenAndAdmin, deleteProduct);
// GET PRODUCT BY ID
router.get('/find/:id', getProductById);
// GET ALL PRODUCTS
router.get('/', getAllProducts);

module.exports = router;