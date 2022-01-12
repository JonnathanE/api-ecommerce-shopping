const router = require('express').Router();
const { payment } = require('../controllers/stripe.controller');

router.post('/payment', payment);

module.exports = router;