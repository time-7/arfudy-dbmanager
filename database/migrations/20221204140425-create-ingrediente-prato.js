module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'ingrediente_prato',
            {
                id_ingrediente: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    unique: 'ingrediente_prato_unique',
                },
                id_prato: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    unique: 'ingrediente_prato_unique',
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
            },
            {
                uniqueKeys: {
                    ingrediente_prato_unique: {
                        fields: ['id_ingrediente', 'id_prato'],
                    },
                },
            }
        )
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('ingrediente_prato')
    },
}
