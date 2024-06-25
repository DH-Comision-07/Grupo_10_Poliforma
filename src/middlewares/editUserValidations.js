const {check} = require('express-validator');

let editUserValidation = [
check('nombre').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 5 }).withMessage('Minimo debe tener 5 caracteres en el nombre'),

check('apellido').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 20 }).withMessage('Minimo debe tener 20 caracteres en el apellido'),

check('categoria').notEmpty().withMessage('No puede estar vacio'),

check('username').notEmpty().withMessage('No puede estar vacio'),

check('telefono').notEmpty().withMessage('No puede estar vacio'),

check("fechaNacimiento").notEmpty().withMessage("No puede estar vacio"),
    
check("imagenUsuario").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg",".jpeg", ".png",".webp"]; 
    
    if (!file) {
        throw new Error("Tiene que subir una imagen");
    } else {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error("Tiene que subir una imagen en formato " + acceptedExtensions)
        }    
    }

    return true;
})
]

module.exports = editUserValidation;