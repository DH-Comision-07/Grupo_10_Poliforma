const fs = require('fs');
const path = require('path');
const usersJSON = require("../data/users.json")
const productsFilePath = path.join(__dirname, "../data/users.json");
const db = require('../model/db/models');
const {validationResult} = require('express-validator');

usersService= {
    users: usersJSON,

    getAll: async function(){
        try {
            return await db.Usuarios.findAll();
        } catch (error) {
            console.log(error);
        }
        
    },
    getOneBy: async function(id) {
        try {
            return await db.Usuarios.findByPk(id);
        } catch (error) {
            console.log(error);
            return {
                id: 0,
                nombre: "No encontrado",
                apellido: 0,
                email: 0,
                imagen: "usuario-vacio.jpg",
                email: ""
            }
        } 
    },

    save: async function(user){
        try {
            db.Usuarios.create(user);
        } catch (error) {
            console.log(error);
        }
        
    },


    getOneByField: async function (email) {
        try {
            return await db.Usuarios.findOne({ where: { email: email } });
        } catch (error) {
          console.log(error);
          return null;
        }
      },

    update: async function (user, body, id, imageFile){
        try {
            newUser= {
                nombre: body.NombreUsuario,
                apellido: body.apellidoUsuario,
                email: user.email,
                contraseña: user.contraseña,
                categoria: body.categoriaUsuario,
                imagen: imageFile? imageFile.filename : user.imagen,
                fechaNacimiento: body.birthday,
                telefono: body.telefono,
                username: body.username,
            }
            await db.Usuarios.update(newUser, {where: {id: id}});
        } catch (error) {
            console.log(error);
        }

    },
    delete: async function (idProd){
        try {
            /*const destroyCarrito = await db.Carrito_productos.destroy ({ where: { productos_id: idProd }});*/
            const resultadoDestroy = await db.Usuarios.destroy ({ where: { id: idProd }});
        
            if (resultadoDestroy === 0) {
                console.log('No se encontró ningún producto con el id proporcionado.');
            } else {
                console.log('Producto eliminado exitosamente.');
            }
        } catch (error) {
          console.error('Error al eliminar el producto:', error);
        }
    },
    /*delete: function (id) {
        let newUsers = this.users.filter((user) => user.id != id);
        console.log(newUsers);
        this.users = newUsers;
        fs.writeFileSync( path.join( __dirname, "/users.json"), JSON.stringify(this.users));
        return newUsers;
    }*/
}

module.exports = usersService;