let credentialMid = {
    guestMid: function(req, res, next){
        if(req.session.usuarioLogiado != undefined){
            //falta definir la variable usuario loguiado en el Service; calculo que esto se conecta con la base de datos de Sprint 6, que es el Sprint que viene.
            res.redirect('/');
        }
        next();
    },
adminMid: function(req, res, next){
    if(req.session.usuarioLoguiado == undefined || req.session.usuarioLoguiado.role != 9){
        res.send("no tienes permiso para ver esta pagina").status(401);
    }
    next();
}
}

module.exports = credentialMid

//Puede ser que nos esté faltando la vista de Administrador? En la Clase 32 la Profe, con su proyecto de pagina de motos ya armado a modo de ejemplo, ya lo tenia hecho, y con eso hecho nos mostraba como hacer que los Admin sean los unicos que puedan modificar las cosas.
//Y eso que nos mostró fue hacer esto de adminMid y luego con esto codeado, ir al archivo admin.routes.js y poner las siguientes dos lineas de codigo. (el archivo admin.routes.js lo cree yo ahora para este Sprint 5)
//const controller = require('../controllers/productsController');

//router.get('/administrar', credentialMid.adminMid, controllersAdmin.save);