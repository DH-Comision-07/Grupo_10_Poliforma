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
            return  await db.Productos.findByPk(id, {
                include: [{ association: 'categoria' }],
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
      save: async function (product) {
        try {
            await db.Productos.create(product)
        } catch (error) {
            console.log(error);
        }

    },

    update: async function (product, body, id, imageFile){
        try {
            newProduct= {
                nombre: body.NombreProducto,
                descripcion: body.descripcion,
                imagen: imageFile? imageFile.filename : product.imagenProducto,
                precio: body.precio,
                stock: body.stock,
                descuento: body.descuento,
                categorias_id: body.categoria
            }
            await db.Productos.update(newProduct, {where: {id: id}});
        } catch (error) {
            console.log(error);
        }

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