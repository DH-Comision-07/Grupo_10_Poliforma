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
        let pedidousuarios = db.poliforma_10.findByPK(req.params.id);

        Promise.all([pedidoUsuarios])
        .then(funtion(usuarios) {
            res.render("editarUsuarios", {usuarios:usuarios})
        })
     },
    actualizar: funtion(req, res) {
        db.poliforma_10.update({
             // (Copiar y pegar lo que se escribío del create de los usuarios y modificar donde dice create por update)
    }, {
        where: {
            id: req.params.id
        }
    });
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