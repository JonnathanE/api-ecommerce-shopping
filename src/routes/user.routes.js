const router = require('express').Router();
const { update, deleteById, getUserById, getAllUsers } = require('../controllers/user.controller');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/authJwt');

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, update);
// DELETE
router.delete('/:id', verifyTokenAndAuthorization, deleteById);
// GET USER BY ID
router.get('/:id', verifyTokenAndAdmin, getUserById);
// GET ALL USERS
router.get('/', verifyTokenAndAdmin, getAllUsers);

module.exports = router;