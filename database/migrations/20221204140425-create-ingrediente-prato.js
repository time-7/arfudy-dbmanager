module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ingrediente_prato', {
            id_ingrediente_prato: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_prato: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            id_ingrediente: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('ingrediente_prato')
    },
}
