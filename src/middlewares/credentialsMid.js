let credentialMid = {
    guestMid: function(req, res, next){
        if(req.session.userLogged != undefined){
            //falta definir la variable usuario loguiado en el Service; calculo que esto se conecta con la base de datos de Sprint 6, que es el Sprint que viene.
            res.redirect('/');
        }
        next();
    },
adminMid: function(req, res, next){
    if(req.session.userLogged == undefined || req.session.userLogged.categoria != 'administrador'){
        console.log(req.session.userLogged.categoria != 'administrador');
        res.send("no tienes permiso para ver esta pagina").status(401);
    }
    next();
    
}
}

module.exports = credentialMid

