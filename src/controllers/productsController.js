
const productsService = require("../data/productsService");

const controller = {

    home: function (req,res){
        res.send("todos los productos");
    },
    detail: function (req,res)  {
        res.render("products/productDetail");
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
            imagen: "algo.jpg",
            categoria: req.body.categoria,
            precio: req.body.precio,
        }
        productsService.save(newProduct);
        res.send(products);
    }
}

module.exports = controller;
