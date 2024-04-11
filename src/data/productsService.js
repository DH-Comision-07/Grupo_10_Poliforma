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
    update: function(product, idProd, imageFile){
        let prodIndex = this.products.findIndex(product => product.id == idProd)
        this.products[prodIndex] = {
            id: Number(idProd),
            nombre: product.NombreProducto,
            descripcion:product.descripcion,
            tags: product.tags,
            imagen: imageFile? imageFile.filename : this.products[prodIndex].imagen,
            categoria: product.categoria,
            precio: product.precio,
        }
        fs.writeFileSync( path.join( __dirname, "/products.json"), JSON.stringify(this.products));

    }
}

module.exports = productService;