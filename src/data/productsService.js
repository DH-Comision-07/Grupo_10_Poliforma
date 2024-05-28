const fs = require('fs');
const path = require('path');
const productsJSON = require("../data/products.json")
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require('../model/db/models');

productService= {
    products: productsJSON,

    getAll: async function(){
        try {
            return await db.Productos.findAll();
        } catch (error) {
            console.log(error);
        }
    },
    getOneBy: async function(id){
        try {
            return await db.Productos.findByPk(id, {
                include: [{association:'categorias'}]
            }) 
        } catch (error) {
            console.log(error);
        }

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

    },
    delete: function (id) {
        let newProducts = this.products.filter((product) => product.id != id);
        this.products = newProducts;
        fs.writeFileSync( path.join( __dirname, "products.json"), JSON.stringify(this.products));
        return newProducts;
    }
}

module.exports = productService;