
const productsService = require("../data/productsService");

const controller = {

    home: async function (req,res){
        try {
            res.render("products/products", {products: await productsService.getAll()}); 
        } catch (error) {
           console.log(error); 
        }
        
    },
    detail: async (req, res) => {
        try {
            const product = await productsService.getOneBy(req.params.id);
            res.render('products/productDetail', {product: await productsService.getOneBy(req.params.id)})
        } catch (error) {
            console.log(error);
        }

    },
    cart: function (req,res) {
        res.render("products/productCart");
    },
    create: function (req, res){
        res.render("products/createProduct")
    },
    edit: function (req, res){
        res.render("products/editProduct", {productToEdit: productsService.getOneBy(req.params.id)})
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
        res.redirect("/products/dashboard");
    },
    dashboard: async function(req,res){
        try {
            res.render("products/dashboard",{products: await productsService.getAll()})
        } catch (error) {
            console.log(error);
        }

    },

    modify: function(req, res){
        productsService.update( req.body, req.params.id, req.file);
        res.redirect("/products/dashboard");
    },
    delete: (req, res) => {
        productService.delete(req.params.id);
        res.redirect("/products/dashboard")
    },
    search: async function(req, res){
        try {
            res.render("products/products", {products: await productsService.search(req.query.busqueda)});
        } catch (error) {
            console.log(error);
        }


    }
}

module.exports = controller;
