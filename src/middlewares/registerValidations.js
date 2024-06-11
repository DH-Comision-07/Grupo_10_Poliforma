const {check} = require('express-validator');

let registerValidations = [
check('nombre').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 2 }).withMessage('Minimo debe tener 2 caracteres en el nombre'),

check('apellido').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 2 }).withMessage('Minimo debe tener 2 caracteres en el apellido'),

check('usuario').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 2 }).withMessage('Minimo debe tener 2 caracteres en el usuario'),

check('email').notEmpty().withMessage('No puede estar vacio')
.isEmail().withMessage('formato no valido'),

check('password').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 8 }).withMessage('Minimo debe tener 8 caracteres'),

check("terminos").notEmpty().withMessage("Tiene que aceptar los términos y condiciones"),
    
check("imagenUsuario").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg",".jpeg", ".png",".webp"]; 
    
    if (!file) {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error("Tiene que subir una imagen en formato " + acceptedExtensions)
        }    
    }

    return true;
})
]

module.exports = registerValidations;