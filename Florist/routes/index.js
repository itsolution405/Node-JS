var express = require('express');
var router = express.Router();

const {Home, Detail, Products} = require('../controllers/page.js');
const {addToCart, cart, remove} = require('../controllers/cart.js');
const {checkout, order} = require('../controllers/checkout.js');

/* GET home page. */
router.get('/', Home);
/* GET detail page. */
router.get('/detail/:id', Detail);
/* GET product page. */
router.get('/products', Products);

// Cart
router.get('/add_to_cart/:id', addToCart);
router.get('/cart', cart);
router.get('/remove/:id', remove);

// Checkout
router.get('/checkout', checkout);
router.post('/order', order);


module.exports = router;
