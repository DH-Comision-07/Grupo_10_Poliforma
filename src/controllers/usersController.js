const usersService = require("../data/usersService")

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
    store: function (req, res){
        let users = usersService.getAll();
        let mayorId = 0;
        for (i=0; i < users.length; i++) {
            if (users[i].id > mayorId) {
                mayorId = users[i].id;
            }
        };
        let newUser = {
            id: mayorId+1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email:req.body.email,
            contraseña:req.body.password,
            categoria:"usuario",
            imagen: req.file? req.file.filename: "usuario-vacio.jpg",
            fechaNacimiento:req.body.birthday,
            telefono:req.body.telefono,
            username:req.body.usuario,
        }
        usersService.save(newUser);
        res.redirect("/users/dashboard");
    },



}

module.exports = users;