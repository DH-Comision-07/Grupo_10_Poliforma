const fs = require('fs');
const path = require('path');
const usersJSON = require("../data/users.json")
const productsFilePath = path.join(__dirname, "../data/users.json");
const db = require('../model/db/models')

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


    getOneByField: async function (field, value) {
        try {
          const user = await db.Usuarios.findOne({ where: { [field]: value } });
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },

    update: function(user, idUser, imageFile){
        let userIndex = this.users.findIndex(user => user.id == idUser)
        this.users[userIndex] = {
            id: Number(idUser),
            nombre: user.NombreUsuario,
            apellido: user.apellidoUsuario,
            email: this.users[userIndex].email,
            contraseña: this.users[userIndex].contraseña,
            categoria: user.categoriaUsuario,
            imagen: imageFile? imageFile.filename : this.users[userIndex].imagen,
            fechaNacimiento: user.birthday,
            telefono: user.telefono,
            username: user.username,
        }
        fs.writeFileSync( path.join( __dirname, "/users.json"), JSON.stringify(this.users));
    },
    delete: function (id) {
        let newUsers = this.users.filter((user) => user.id != id);
        console.log(newUsers);
        this.users = newUsers;
        fs.writeFileSync( path.join( __dirname, "/users.json"), JSON.stringify(this.users));
        return newUsers;
    }
}

module.exports = usersService;