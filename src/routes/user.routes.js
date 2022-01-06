const router = require('express').Router();
const { update } = require('../controllers/user.controller');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/authJwt');

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, update);

module.exports = router;