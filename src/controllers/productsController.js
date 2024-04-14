
const productsService = require("../data/productsService");

const controller = {

    home: function (req,res){
        res.render("products/products", {products: productsService.getAll()});
    },
    detail: (req, res) => {
        const product = productsService.getOneBy(req.params.id);
        res.render('products/productDetail', {product: productsService.getOneBy(req.params.id)})
    },
    cart: function (req,res) {
        res.render("products/productCart");
    },
    create: function (req, res){
        res.render("products/createProduct")
    },
    edit: function (req, res){
        res.render("products/editProduct")
    },
    store: function (req, res){
        let products = productsService.getAll();
        let mayorId = 0;
        for (i=0; i < products.length; i++) {
            if (products[i].id > mayorId) {
                mayorId = products[i].id;
            }
        };
        let newProduct = {
            id: mayorId+1,
            nombre: req.body.NombreProducto,
            descripcion:req.body.descripcion,
            tags: req.body.tags,
            imagen: req.file.filename,
            categoria: req.body.categoria,
            precio: req.body.precio,
        }
        productsService.save(newProduct);
        res.send(products);
    },
    dashboard: function(req,res){
        res.render("products/dashboard",{products: productsService.products})
    }
}

module.exports = controller;
