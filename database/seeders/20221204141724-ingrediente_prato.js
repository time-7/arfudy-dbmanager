module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'ingrediente_prato',
            [
                {
                    id_prato: 1,
                    id_ingrediente: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id_prato: 1,
                    id_ingrediente: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id_prato: 1,
                    id_ingrediente: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id_prato: 2,
                    id_ingrediente: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('ingrediente_prato', null, {}),
}
