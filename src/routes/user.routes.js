const router = require('express').Router();
const { user } = require('../controllers/user.controller');

router.get('/usertest', user);

module.exports = router;