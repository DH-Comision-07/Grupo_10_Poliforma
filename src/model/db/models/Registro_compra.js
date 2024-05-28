module.exports = (sequelize, DataTypes)=>{

    let alias = 'Compras';
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
        fecha_compra:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        precio_compra:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        }
    };
    let config  = {
        tableName: 'registro_compra',
        timestamps: false
    };

    let Registro_compra = sequelize.define(alias, cols, config);

    return Registro_compra;
}