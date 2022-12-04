module.exports = (sequelize, DataTypes) => {
    const ingrediente_prato = sequelize.define(
        'ingrediente_prato',
        {
            id_prato: DataTypes.INTEGER,
            id_ingrediente: DataTypes.INTEGER,
        },
        {
            indexes:[
                {
                    unique: true,
                    fields: ['id_prato', 'id_ingrediente']
                }
            ]
        }
    )
    ingrediente_prato.associate = function (models) {
        ingrediente_prato.belongsTo(models.prato, {
            foreignKey: 'id_prato',
            as: 'prato',
        })
        ingrediente_prato.belongsTo(models.ingrediente, {
            foreignKey: 'id_ingrediente',
            as: 'ingrediente',
        })
    }
    return ingrediente_prato
}
