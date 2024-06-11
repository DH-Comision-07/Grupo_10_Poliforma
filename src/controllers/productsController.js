
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
   // edit: function (req, res){
     //   res.render("products/editProduct", {productToEdit: productsService.getOneBy(req.params.id)})
     // Antes que yo Denis creara el editar, osea el Update estaban estas dos lineas de codigo que estan aca arriba, las cuales las dejé como comentarios para no this.eliminarlas.
     edit: function (req, res) {
        let pedidoProductos = db.poliforma_10.findByPK(req.params.id);

        let pedidoCategorias = de.poliforma_10-findAll();

        Promise.all([pedidoProducto, pedidoCategorias])
        .then(funtion(productos, categorias) {
            res.render("editarProductos", {productos:productos, categorias:categorias})
        })
     },
    actualizar: funtion(req, res) {
        db.poliforma_10.update({
             // (Copiar y pegar lo que se escribío del create y modificar donde dice create por update)
    }, {
        where: {
            id: req.params.id
        }
    });
        res.render('users/products', {productsToEdit: produtsService.getOneBy(req.params.id)})
       // res.redirect(("/productDetail/:id",productsController.detail);)
     }
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
    dashboard: function(req,res){
        res.render("products/dashboard",{products: productsService.getAll()})
    },

    modify: function(req, res){
        productsService.update( req.body, req.params.id, req.file);
        res.redirect("/products/dashboard");
    },
    delete: (req, res) => {
        productService.delete(req.params.id);
        res.redirect("/products/dashboard")
    }
    
}

module.exports = controller;
