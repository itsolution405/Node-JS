const conn = require('../config.js');

module.exports = function Order(name, phone, email, city, pos, address) {        
    this.name = name || null;
    this.phone = phone || null;
    this.email = email || null;
    this.city = city || null;
    this.pos = pos || null;
    this.address = address || null;

    this.inputRecipient = function(callback) {
        let sql = "INSERT INTO recipient VALUES ('','"+this.name+"','"+this.phone+"','"+this.email+"','"+this.city+"','"+this.pos+"','"+this.address+"')";  
        conn.query(sql, callback);
    };    

    this.inputOrder = function(insertId, flower, callback) {
        let sql = "INSERT INTO flower_order VALUES ('',"+flower.item.id+","+insertId+","+flower.quantity+","+flower.price+")";  
        conn.query(sql, callback);
    }
};