const usersService = require("../data/usersService");
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

let users = {
    login: function(req,res){ 
        res.render("users/login")
    },
    loginProcess: async function(req, res){
        try {
            let resultValidations = validationResult(req);
            if(resultValidations.errors.length > 0){
                res.redirect('/users/login')
            }else{
            let userToLogin = await usersService.getOneByField(req.body.email);
            
            if(userToLogin){
                isOkThePassword = bcryptjs.compareSync(req.body.contraseña, userToLogin.contraseña)
                if(isOkThePassword || req.body.contraseña === userToLogin.contraseña){
                    delete userToLogin.contraseña
                    req.session.userLogged = userToLogin;
                   return res.redirect('/users/profile/' + userToLogin.id)
                }
                res.send('clave invalida')
            }
    
            return res.send('error')
        }
        } catch (error) {
            console.log(error);
        }

    },
    register: function(req,res){ 
        res.render("users/register")
    },
    userProfile: async function(req, res){
        try {
            const user = await usersService.getOneBy(req.params.id);
            res.render('users/profile', {user: await usersService.getOneBy(req.params.id)})
        } catch (error) {
            console.log(error);
        }
        
        
    },
    editUser: async function(req, res){
        try {
            res.render('users/editProfile', {userToEdit: await usersService.getOneBy(req.params.id)}) 
        } catch (error) {
            console.log(error);
        }
    },
    modify: async function(req, res){
        try {
            let resultValidations = validationResult(req);
            console.log(resultValidations);
            if (resultValidations.errors.length > 0) {
                return res.redirect('/users/editProfile/' + req.params.id)
              }else{
            user = await usersService.getOneBy(req.params.id)
            await usersService.update(user, req.body, req.params.id, req.file);
            res.redirect("/users/dashboard");
              }         
        } catch (error) {
          console.log(error);  
        }
    },
    deleteUser: (req, res) => {
        usersService.delete(req.params.id);
        res.redirect("/users/dashboard")
    },
    dashboard: async function(req, res){
        try {
            res.render('users/dashboardUsarios', {users: await usersService.getAll()})
        } catch (error) {
            console.log(error);
        }
        
    },
    store: async function (req, res){
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
    },
    logout: function(req, res){
        req.session.destroy();
        return res.redirect('/')
    }
}

module.exports = users;