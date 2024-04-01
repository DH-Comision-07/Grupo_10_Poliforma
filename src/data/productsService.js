const fs = require('fs');
const path = require('path');
const productsJSON = require("./products.json")
const productsFilePath = path.join(__dirname, "../data/products.json");

productService= {
    products: productsJSON,

    getAll: function(){
        return this.products;
    },
    getOneBy: function(id){
        return this.products.find(product => product.id == id)
    },
    save: function(product){
        this.products.push(product);
    }
}

module.exports = productService;