module.exports = (sequelize, DataTypes) => {
    const prato = sequelize.define(
        'prato',
        {
            ds_prato: DataTypes.STRING,
            nome: DataTypes.STRING,
            imagem: DataTypes.STRING,
            has3d: DataTypes.BOOLEAN,
            valor: DataTypes.DOUBLE,
            valor_nutricional: DataTypes.DOUBLE,
        },
        {}
    )
    prato.associate = function (models) {
        prato.hasMany(models.Post, {
            foreignKey: 'id_prato',
            as: 'ingrediente_prato',
            onDelete: 'CASCADE',
        })
    }
    return prato
}
