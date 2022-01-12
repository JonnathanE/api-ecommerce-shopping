const router = require('express').Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/authJwt');

const { create, update, deleteCart, getCartByUserId, getAllCarts } = require('../controllers/cart.controller');

// CREATE NEW USER CART
router.post('/', verifyToken, create);
// UPDATE USER CART
router.put('/:id', verifyTokenAndAuthorization, update);
// DELETE USER CART
router.delete('/:id', verifyTokenAndAuthorization, deleteCart);
// GET USER CART BY USER ID
router.get('/find/:id', verifyTokenAndAuthorization, getCartByUserId);
// GET ALL USER CARTS
router.get('/', verifyTokenAndAdmin, getAllCarts);

module.exports = router;