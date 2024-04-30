const productsService = require("../data/productsService");
const userService = require("../data/usersService")

let users = {
    login: function(req,res){ 
        res.render("users/login")
    },
    loginProcess: function(req, res){
        let userToLogin =  usersService.getOneByField('email', req.body.email);
        
        if(userToLogin){
            if(userToLogin.contraseña === req.body.contraseña){
                delete userToLogin.contraseña
                req.session.userLogged = userToLogin;
               return res.redirect('/users/profile/' + userToLogin.id)
            }
            res.send('clave invalida')
        }

        return res.send('error')
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
    modify: function(req, res){
        usersService.update( req.body, req.params.id, req.file);
        res.redirect("/users/dashboard");
    },
    deleteUser: (req, res) => {
        usersService.delete(req.params.id);
        res.redirect("/users/dashboard")
    },
    dashboard: function(req, res){
        res.render('users/dashboardUsarios', {users: usersService.getAll()})
    },


}

module.exports = users;