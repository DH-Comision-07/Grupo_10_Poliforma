const usersService = require("../data/usersService");
const productsService = require("../data/productsService");

const mainController = {
    index: function(req,res){
        res.render("index");
    },
    allUsers: async function(req,res){
        try {
            let usuarios = await usersService.getAll();
            let usersWithDetail = usuarios.map(user => {
                return {
                    ...user.dataValues,
                    detalle: `http://localhost:3030/users/profile/${user.id}`
                }
            });
            return res.json({
                count: usuarios.length,
                users: usersWithDetail,
            })
        } catch (error) {
            console.log(error);
        }
    },
    oneUser: async function(req, res){
        try {
            let usuario = await usersService.getOneBy(req.params.id)
            return res.json({
                id: usuario.id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                fechaNacimiento: usuario.fechaNacimiento,
                telefono: usuario.telefono,
                username: usuario.username,
                imagen: usuario.imagen
            })
        } catch (error) {
            console.log(error);
        }
    },
    allProducts: async function(req, res){
        try {
            let productos = await productsService.getAll();
            let productsWithDetail = productos.map(product => {
                return {
                    ...product.dataValues, 
                    detalle: `http://localhost:3030/products/${product.id}`
                }
            });
            return res.json({
                count: productos.length,
                countByCategory: {
                    mates: (await productsService.findByCategory('mates')).length,
                    jarrones: (await productsService.findByCategory('jarrones')).length,
                    macetas: (await productsService.findByCategory('macetas')).length,
                    figuritas: (await productsService.findByCategory('figuritas')).length,
                    oficina: (await productsService.findByCategory('oficina')).length,
                    lamparas: (await productsService.findByCategory('lamparas')).length
                },
                products: productsWithDetail,
            })
        } catch (error) {
            console.log(error);
        }
    },
    oneProduct: async function(req, res){
        try {
            let producto = await productsService.getOneBy(req.params.id);
            return res.json({
                id: producto.id,
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                precio: producto.precio,
                stock: producto.stock,
                descuento: producto.descuento,
                categorias_id: producto.categorias_id,
                categoria: [producto.categoria],
                imagen: producto.imagen
            })
        } catch (error) {
            
        }
    }
}

module.exports = mainController;