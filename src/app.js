const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

// use methods libs
dotenv.config();

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/carts', require('./routes/cart.routes'));
app.use('/api/orders', require('./routes/order.routes'));

module.exports = app;