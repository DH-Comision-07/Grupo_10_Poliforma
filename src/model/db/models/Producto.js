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
        timeStamps: false
    };

    let Producto = sequelize.define(alias, cols, config);

    return Producto;
}