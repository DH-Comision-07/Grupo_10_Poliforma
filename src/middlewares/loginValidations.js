const {check} = require('express-validator');

let loginValidations = [
check('email').notEmpty().withMessage('No puede estar vacio')
.isEmail().withMessage('formato no valido'),

check('contraseña').notEmpty().withMessage('No puede estar vacio')
.isLength({ min: 6 }).withMessage('Minimo debe tener 8 caracteres'),
]

module.exports = loginValidations;