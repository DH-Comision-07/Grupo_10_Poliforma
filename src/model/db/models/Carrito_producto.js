module.exports = (sequelize, DataTypes)=>{

    let alias = 'Carrito';
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

    return Carrito_productos;
}