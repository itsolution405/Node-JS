module.exports = function Cart(cart) {
    this.items =  cart.items || {};
    this.totalItems = cart.totalItems || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.add = function(item, id) {
        var cartItem = this.items[id];
        if (!cartItem) {
            cartItem = this.items[id] = {item: item, quantity: 0, price: 0};
        }
        var currentPrice = cartItem.item.price;
        if(cartItem.item.discount_price > 0)
            currentPrice = cartItem.item.discount_price;

        cartItem.quantity++;
        cartItem.price = currentPrice * cartItem.quantity;
        this.totalItems++;
        this.totalPrice += currentPrice;
    };

    this.remove = function(id) {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };
    
    this.getItems = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};