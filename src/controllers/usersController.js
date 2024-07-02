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
    actualizar:async function (req, res){
        db.poliforma_10.update({
        console.log(req.body);
        try {
            let resultValidations = validationResult(req);
            console.log(resultValidations);
            console.log(resultValidations.errors.length);
            if(resultValidations.errors.length > 0){
                res.redirect("/users/register")
            }
            let newUser = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email:req.body.email,
                contraseña: bcryptjs.hashSync(req.body.password, 10),
                categoria:"usuario",
                imagen: req.file? req.file.filename: "usuario-vacio.jpg",
                fechaNacimiento: req.body.birthday,
                telefono:req.body.telefono,
                username:req.body.usuario,
            }
            await usersService.save(newUser);
            res.redirect("/users/login");
        } catch (error) {
            console.log(error);
        }
    }, {
        where: {
            id: req.params.id
        }
    });
        res.render('users/editProfile/:id', {userToEdit: usersService.getOneBy(req.params.id)})
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