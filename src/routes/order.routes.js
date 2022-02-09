const router = require('express').Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/authJwt');
const { create, update, deleteOrder, getOrderByUserId, getAllOrders, getMonthlyIncome } = require('../controllers/order.controller');

// CREATE ORDER
router.post('/', verifyToken, create);
// UPDATE ORDER
router.put('/:id', verifyTokenAndAdmin, update);
// DELETE ORDER
router.delete('/:id', verifyTokenAndAdmin, deleteOrder);
// GET ORDER BY USER ID
router.get('/find/:id', verifyTokenAndAuthorization, getOrderByUserId);
// GET ALL ORDERS
router.get('/', verifyTokenAndAdmin, getAllOrders);
// GET MONTHLY INCOME
router.get('/income', verifyTokenAndAdmin, getMonthlyIncome);

module.exports = router;