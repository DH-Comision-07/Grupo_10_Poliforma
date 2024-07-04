let main = {
    index: function(req,res){
        res.render("index");
    },
    contact: function(req, res){
        res.render('contact')
    }
}

module.exports = main;