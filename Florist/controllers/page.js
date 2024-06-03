var Cart = require('../models/cart');
const Flower = require("../models/flower");

// Home page
exports.Home = (req, res) => {
    var cart = new Cart(req.session.cart ? req.session.cart : {});   
    var flower = new Flower();

    flower.getDeals((err, results) => {
        if(err) throw err;
        res.render('index', { 
            flowers: results,
            total : cart.totalItems 
        });
    })        
}

exports.Detail = (req, res) => {
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    var flower = new Flower();

    let id = req.params.id;     
    flower.getDetail(id, (err, results) => {
        if(err) throw err;
        res.render('detail', { 
            results,
            total : cart.totalItems 
        });
    })   
}

exports.Products = (req, res) => {
    // Session cart
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    var flower = new Flower();
    // Category
    let category = req.query.category;  

    flower.getProducts(category, (err, results)=> {
        if(err) throw err;
        res.render('product', { 
            flowers : results,
            total : cart.totalItems 
        });
    })     
}