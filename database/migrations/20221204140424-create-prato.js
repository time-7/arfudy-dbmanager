module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('prato', {
            id_prato: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            ds_prato: {
                type: Sequelize.STRING,
            },
            nome: {
                type: Sequelize.STRING,
            },
            imagem: {
                type: Sequelize.STRING,
            },
            has3d: {
                type: Sequelize.BOOLEAN,
            },
            valor: {
                type: Sequelize.DOUBLE,
            },
            valor_nutricional: {
                type: Sequelize.DOUBLE,
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
        await queryInterface.dropTable('prato')
    },
}
