var Cart = require('../models/cart');
var Flower = require('../models/flower');

// Cart
exports.addToCart = (req, res) => {
    var flowerId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    var flower = new Flower();

    flower.getProduct(flowerId, (err, results)=> {
      if(err) throw err;

      cart.add(results[0], flowerId);
      req.session.cart = cart;

      res.redirect('/detail/'+flowerId);
    })   
}
  
exports.cart = (req, res) => {
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    res.render('cart', {    
      products: cart.getItems(),
      total : cart.totalItems,
      totalPrice: cart.totalPrice
    });
}
  
exports.remove = (req, res) => {
    var flowerId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
  
    cart.remove(flowerId);
    req.session.cart = cart;
    res.redirect('/cart');
}