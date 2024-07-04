module.exports = (sequelize, DataTypes)=>{

    let alias = 'Tags';
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
    };
    let config  = {
        tableName: 'tags',
        timeStamps: false
    };

    let Tag = sequelize.define(alias, cols, config);

    Tag.associate = function(models){
        Tag.belongsTo(models.Productos, {
            as:'producto',
            foreignKey: 'productos_id'
        })
    }

    return Tag;
}