module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'ingrediente',
            [
                {
                    nome: 'Nome ingrediente teste 01',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Nome ingrediente teste 02',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Nome ingrediente teste 03',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('ingrediente', null, {}),
}
