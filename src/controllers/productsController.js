
const productsService = require("../data/productsService");
const {validationResult} = require('express-validator');

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
    store: async function (req, res){
        try {
            let resultValidations = validationResult(req);
            if(resultValidations.errors.length > 0){
                res.redirect("/products/createProduct")
            }
            let newProduct = {
                nombre: req.body.NombreProducto,
                descripcion:req.body.descripcion,
                tags: req.body.tags,
                imagen: req.file.filename,
                categorias_id: req.body.categoria,
                precio: req.body.precio,
                stock: req.body.stock,
                descuento: req.body.descuento
            }
            await productsService.save(newProduct);
            res.redirect("/products/dashboard");
        } catch (error) {
            console.log(error);
        }

    },
    dashboard: async function(req,res){
        try {
            res.render("products/dashboard",{products: await productsService.getAll()})
        } catch (error) {
            console.log(error);
        }

    },

    modify: function(req, res){
        let resultValidations = validationResult(req);
        if(resultValidations.errors.length > 0){
            res.redirect("/products/editProduct")
        }
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
