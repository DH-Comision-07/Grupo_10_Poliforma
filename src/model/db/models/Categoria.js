module.exports = (sequelize, DataTypes)=>{

    let alias = 'Categorias';
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
        }
    };
    let config  = {
        tableName: 'categorias',
        timeStamps: false
    };

    let Categoria = sequelize.define(alias, cols, config);

    return Categoria;
}