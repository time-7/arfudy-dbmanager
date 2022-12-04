module.exports = (sequelize, DataTypes) => {
    const ingrediente = sequelize.define(
        'ingrediente',
        {
            nome: DataTypes.STRING,
        },
        {}
    )
    ingrediente.associate = function (models) {
        ingrediente.hasMany(models.Post, {
            foreignKey: 'id_ingrediente',
            as: 'ingrediente_prato',
            onDelete: 'CASCADE',
        })
    }
    return ingrediente
}
