let products = {
    home: (req,res)=>res.send("todos los productos"),
    getDetail: (req,res)=> res.render("products/productDetail"),
    getCart: (req,res)=> res.render("products/productCart"),
    getCreate: (req, res)=> res.render("products/createProduct")
}

module.exports = products;
