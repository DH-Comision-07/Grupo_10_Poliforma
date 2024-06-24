const fs = require('fs');
const path = require('path');
const productsJSON = require("../data/products.json")
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require('../model/db/models');
const { Op } = require('sequelize');

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
                include: [{association:'categoria'}, {association: 'tags'}]
            }) 
        } catch (error) {
            console.log(error);
        }

    },
    findByField: async function (field, value) {
        try {
          const user = await db.Usuarios.findOne({ where: { [field]: value } });
          return user;
        } catch (error) {
          console.log(error);
          return null;
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
/*     delete: function (id) {
        let newProducts = this.products.filter((product) => product.id != id);
        this.products = newProducts;
        fs.writeFileSync( path.join( __dirname, "products.json"), JSON.stringify(this.products));
        return newProducts;
    }, */
    delete: async function (idProd){
        try {
            const destroyCarrito = await db.Carrito_productos.destroy ({ where: { productos_id: idProd }});
            const resultadoDestroy = await db.Productos.destroy ({ where: { id: idProd }});
        
            if (resultadoDestroy === 0) {
                console.log('No se encontró ningún producto con el id proporcionado.');
            } else {
                console.log('Producto eliminado exitosamente.');
            }
        } catch (error) {
          console.error('Error al eliminar el producto:', error);
        }
    },

    search: async function(busqueda){
        try {
            return await db.Productos.findAll({
              where: {
                nombre: {
                  [Op.like]: `${busqueda}%`
                }
              }
            });
          } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = productService;