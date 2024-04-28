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
        const user = usersService.getOneBy(req.params.id);
        res.render('users/profile', {user: usersService.getOneBy(req.params.id)})
    },
    editUser: function(req, res){
        res.render('users/editProfile', {userToEdit: usersService.getOneBy(req.params.id)})
    },
    deleteUser: function(){

    },
    dashboard: function(req, res){
        res.render('users/dashboardUsarios', {users: usersService.getAll()})
    },


}

module.exports = users;