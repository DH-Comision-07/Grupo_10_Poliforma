module.exports = (sequelize, DataTypes)=>{

    let alias = 'Usuarios';
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
        apellido:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        contraseña:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        imagen: DataTypes.STRING(45),
        FechaNacimiento:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        telefono:{
            type: DataTypes.STRING(15),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
    };
    let config  = {
        tableName: 'usuarios',
        timeStamps: false
    };

    let Producto = sequelize.define(alias, cols, config);

    return Producto;
}