var Cart = require('../models/cart');
var Order = require('../models/order');

// Checkout
exports.checkout = (req, res) => {
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    res.render('checkout', {    
      products: cart.getItems(),
      total : cart.totalItems,
      totalPrice: cart.totalPrice
    });
}
  
exports.order = (req, res) => {
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    var order = new Order();
    var flowers_order = cart.getItems();
  
    let name = req.body.name;
    let phone = req.body.phone;
    let email = req.body.email;
    let city = req.body.city;
    let pos = req.body.pos;
    let address = req.body.address;

    var order = new Order(name, phone, email, city, pos, address);
    
    req.session.destroy();

    order.inputRecipient((err, results) => {
      if(err) throw err;
      for (var i = 1 in flowers_order) {
        order.inputOrder(results.insertId, flowers_order[i], (error, results) => {
          if(error) throw error;
          res.redirect('/');
        })
      }
     
  })      
}