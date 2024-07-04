const {check} = require('express-validator');
const path = require("path");

let editUserValidation = [
check('NombreUsuario').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 5 }).withMessage('Minimo debe tener 5 caracteres en el nombre'),

check('apellidoUsuario').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 5 }).withMessage('Minimo debe tener 5 caracteres en el apellido'),

check('categoriaUsuario').notEmpty().withMessage('No puede estar vacio'),

check('username').notEmpty().withMessage('No puede estar vacio'),

check('telefono').notEmpty().withMessage('No puede estar vacio'),

check("birthday").notEmpty().withMessage("No puede estar vacio"),
    
check("imagenUsuario").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg",".jpeg", ".png",".webp"]; 
    
    if (file) {
        let fileExtension = path.extname(file.originalname.toLowerCase());
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error("Tiene que subir una imagen en formato " + acceptedExtensions)
        }    
    }

    return true;
})
]

module.exports = editUserValidation;