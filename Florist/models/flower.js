const conn = require('../config.js');

module.exports = function Flower() {    
    this.getDeals = function(callback) {
        let sql = "SELECT * FROM flower INNER JOIN deals ON flower.id = deals.flower_id";  
        conn.query(sql, callback);
    };
    this.getDetail = function(id, callback){
        let sql = "SELECT * FROM (select * from flower where id ="+id+") as f LEFT JOIN deals ON f.id = deals.flower_id AND f.id ="+id;  
        conn.query(sql, callback);
    };
    this.getProducts = function(category, callback){
        let sql = "SELECT * FROM (select * from flower where category = '"+category+"') as f LEFT JOIN deals ON f.id = deals.flower_id";  
        conn.query(sql, callback);
    };
    
    this.getProduct = function(flowerId, callback){
        let sql = "SELECT * FROM (select * from flower where id ="+flowerId+") as f LEFT JOIN deals ON f.id = deals.flower_id AND f.id ="+flowerId;  
        conn.query(sql, callback);
    };
    
};