module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'prato',
            [
                {
                    ds_prato: 'Descrição teste 01',
                    nome: 'Macarronada ao molho sugo abolonhesado',
                    imagem: 'Imagem teste 01',
                    has3d: true,
                    valor: 10.1,
                    valor_nutricional: 20.2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    ds_prato: 'Descrição teste 02',
                    nome: 'Famosa panqueca da utf (lendária)',
                    imagem: 'Imagem teste 02',
                    has3d: true,
                    valor: 11.11,
                    valor_nutricional: 22.22,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('prato', null, {}),
}
