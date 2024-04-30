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
    getOneByField: function(field, text){
        return this.users.find(user => user[field] === text)
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