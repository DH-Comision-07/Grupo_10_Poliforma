const fs = require('fs');
const path = require('path');
const productsJSON = require("../data/products.json")
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
        fs.writeFileSync( path.join( __dirname, "/products.json"), JSON.stringify(this.products));
    },
    delete: function (id) {
        let newProducts = this.products.filter((product) => product.id != id);
        this.products = newProducts;
        fs.writeFileSync( path.join( __dirname, "products.json"), JSON.stringify(this.products));
        return newProducts;
    }
}

module.exports = productService;