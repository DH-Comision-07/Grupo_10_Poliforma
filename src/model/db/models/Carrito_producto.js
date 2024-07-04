const Producto = require("./Producto");

module.exports = (sequelize, DataTypes)=>{

    let alias = 'Carrito_productos';
    let cols ={
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha_agregado:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        precio_total:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        }
    };
    let config  = {
        tableName: 'carrito_productos',
        timestamps: false
    };

    let Carrito_productos = sequelize.define(alias, cols, config);

    Carrito_productos.associate = function(models) {
        Carrito_productos.belongsTo(models.Productos, {
          foreignKey: 'productos_id',
          as: 'carrito'
        });
    };

    return Carrito_productos;
}