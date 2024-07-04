const Categoria = require("./Categoria");

module.exports = (sequelize, DataTypes)=>{

    let alias = 'Productos';
    let cols ={
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        descripcion:{
            type: DataTypes.TEXT('long'),
            allowNull: false
        },
        imagen:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        precio:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descuento: DataTypes.STRING(45)
    };
    let config  = {
        tableName: 'productos',
        timestamps: false
    };

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = (model) => {
        Producto.belongsTo(model.Categorias, {
          as: "categoria",
          foreignKey: "categorias_id",
        });
      };

    /*Producto.associate = function(models){
        Producto.hasMany(models.Tags, {
            as:'tags',
            foreignKey: 'productos_id'
        });
    };
    Producto.associate = function(models){
        Producto.hasMany(models.Carrito_productos, {
            as:'carrito',
            foreignKey: 'productos_id'
        });
    };
    */



    return Producto;
}