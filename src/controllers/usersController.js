const productsService = require("../data/productsService");
const userService = require("../data/usersService")

let users = {
    login: function(req,res){ 
        res.render("users/login")
    },
    register: function(req,res){ 
        res.render("users/register")
    },
    userProfile: function(req, res){
        res.render('users/profile', {products: productsService.getAll()})
    },
    editUser: function(){

    },
    deleteUser: function(){

    },
    dashboard: function(req, res){
        res.render('users/dashboardUsarios', {users: usersService.getAll()})
    },


}

module.exports = users;