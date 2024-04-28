const fs = require('fs');
const path = require('path');
const usersJSON = require("../data/users.json")
const productsFilePath = path.join(__dirname, "../data/users.json");

usersService= {
    users: usersJSON,

    getAll: function(){
        return this.users;
    },
    getOneBy: function(id){
        return this.users.find(user => user.id == id)
    },
    update: function(user, idUser, imageFile){
        let userIndex = this.users.findIndex(user => user.id == idUser)
        this.users[userIndex] = {
            id: Number(idUser),
            nombre: user.NombreUsuario,
            apellido: user.apellidoUsuario,
            username: user.username,
            imagen: imageFile? imageFile.filename : this.users[userIndex].imagen,
            categoria: user.categoriaUsuario,
            nacimiento: user.birthDate,
            telefono: user.telefono,
            email: user.email
        }
        fs.writeFileSync( path.join( __dirname, "/users.json"), JSON.stringify(this.users));

    }
}