let products = {
    home: (req,res)=>res.send("todos los productos"),
    dashboard: (req,res)=> res.render("products/dashboard"),
    getDetail: (req,res)=> res.render("products/productDetail"),
    getCart: (req,res)=> res.render("products/productCart"),
    getCreate: (req, res)=> res.render("products/createProduct"),
    getEdit: (req, res)=> res.render("products/editProduct")
}

module.exports = products;
