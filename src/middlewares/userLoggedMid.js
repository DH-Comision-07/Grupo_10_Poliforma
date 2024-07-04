const usersService = require("../data/usersService");

async function userLoggedMid(req, res, next){
    res.locals.isLogged = false
    
    let emailInCookie = req.cookies.userEmail;
    if (emailInCookie) {
      let userFromCookie = await usersService.getOneByField('email', emailInCookie);
      if (userFromCookie) {
        req.session.userLogged = userFromCookie.dataValues;
      }
    }

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next()
}

module.exports = userLoggedMid