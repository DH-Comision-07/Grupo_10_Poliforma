const {check} = require('express-validator');

let createProductValidation = [
check('NombreProducto').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 5 }).withMessage('Minimo debe tener 5 caracteres en el nombre'),

check('descripcion').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 20 }).withMessage('Minimo debe tener 20 caracteres en el apellido'),

check('categoria').notEmpty().withMessage('No puede estar vacio'),

check('email').notEmpty().withMessage('No puede estar vacio')
.isEmail().withMessage('formato no valido'),

check('stock').notEmpty().withMessage('No puede estar vacio'),

check("precio").notEmpty().withMessage("No puede estar vacio"),
    
check("imagenProducto").custom((value, { req }) => {
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

module.exports = createProductValidation;