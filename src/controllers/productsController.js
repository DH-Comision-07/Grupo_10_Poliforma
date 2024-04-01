let products = {
    home: (req,res)=>res.render("products/products"),
    getDetail: (req,res)=> res.render("products/productDetail"),
    getCart: (req,res)=> res.render("products/productCart"),
    getCreate: (req, res)=> res.render("products/createProduct"),
    getEdit: (req, res)=> res.render("products/editProduct")
}

module.exports = products;
