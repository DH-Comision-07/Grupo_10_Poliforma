const {check} = require('express-validator');
const path = require("path");
const usersService = require("../data/usersService");

let registerValidations = [
check('nombre').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 2 }).withMessage('Minimo debe tener 2 caracteres en el nombre'),

check('apellido').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 2 }).withMessage('Minimo debe tener 2 caracteres en el apellido'),

check('usuario').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 2 }).withMessage('Minimo debe tener 2 caracteres en el usuario'),

check('email').notEmpty().withMessage('No puede estar vacio')
.isEmail().withMessage('formato no valido')
.custom( async (value, { req }) =>{
    let userInDB = await usersService.getOneByField('email',req.body.email);
    console.log(userInDB);

if (userInDB) {
    throw new Error('Este correo electrónico ya ha sido registrado');

} else {
 return true
}
}),

check('password').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 8 }).withMessage('Minimo debe tener 8 caracteres'),

check("repassword").notEmpty()
.custom((value, { req }) => {
    let repassword = req.body.repassword;
    
    if (repassword !== req.body.password) {
            throw new Error("Las contraseñas no coinciden");
        }    

    return true;
}),

check("terminos").custom((value, { req }) => {
    if (req.body.terminos !== 'on') {
            throw new Error("Debes aceptar los terminos y condiciones");
        }    

    return true;
}),
    
check("imagenUsuario").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg",".jpeg", ".png",".webp"]; 
    
    if (file) {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error("Tiene que subir una imagen en formato " + acceptedExtensions)
        }    
    }

    return true;
})
]

module.exports = registerValidations;