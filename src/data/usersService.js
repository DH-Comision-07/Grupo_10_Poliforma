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
}