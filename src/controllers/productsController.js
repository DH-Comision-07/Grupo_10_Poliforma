
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
    edit: async function (req, res){
        try {
            res.render("products/editProduct", {productToEdit: await productsService.getOneBy(req.params.id)})
        } catch (error) {
            console.log(error);
        }
    },
    store: async function (req, res){
        try {
            let resultValidations = validationResult(req);
            if(resultValidations.errors.length > 0){
                res.render('products/createProduct', {
                    errors: resultValidations.mapped,
                    oldData: req.body
            })
            }else{
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
            }
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

    modify: async function(req, res){
        try {
            let resultValidations = validationResult(req);
            console.log(resultValidations);
            if (resultValidations.errors.length > 0) {
                return res.render('products/editProduct', {
                    productToEdit: await productsService.getOneBy(req.params.id),
                    errors: resultValidations.mapped,
                    oldData: req.body
                })
              }else{
            let product = await productsService.getOneBy(req.params.id);
            await productsService.update(product, req.body, req.params.id, req.file);
            res.redirect("/products/dashboard");
              }         
        } catch (error) {
            console.log(error);
        }
    },
    delete: (req, res) => {
        productService.delete(req.params.id);
        res.redirect("/products/dashboard")
        console.log("redireccionado al dashboard desp de borrar");
    },
    search: async function(req, res){
        try {
            res.render("products/products", {products: await productsService.search(req.query.busqueda)});
        } catch (error) {
            console.log(error);
        }


    },
    price: async function(req, res){
        try {
           res.render('products/products', {products: await productsService.price(req.query.filtro)}) 
        } catch (error) {
            console.log(error);
        }
    },
    category: async function(req, res){
        try {
            res.render('products/products', {products: await productsService.findByCategory(req.params.categoria)}) 
         } catch (error) {
             console.log(error);
         }
    }
}

module.exports = controller;
