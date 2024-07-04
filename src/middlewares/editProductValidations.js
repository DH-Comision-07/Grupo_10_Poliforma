const {check} = require('express-validator');
const path = require("path");


let editProductValidation = [
check('NombreProducto').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 5 }).withMessage('Minimo debe tener 5 caracteres en el nombre'),

check('descripcion').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 20 }).withMessage('Minimo debe tener 20 caracteres en el apellido'),

check('categoria').notEmpty().withMessage('No puede estar vacio'),

check('stock').notEmpty().withMessage('No puede estar vacio'),

check("precio").notEmpty().withMessage("No puede estar vacio"),
    
check("imagenProducto").custom((value, { req }) => {
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

module.exports = editProductValidation;