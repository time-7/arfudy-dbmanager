module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'prato',
            [
                {
                    ds_prato: 'Descrição teste 01',
                    nome: 'Macarronada ao molho sugo abolonhesado',
                    imagem: 'https://claudia.abril.com.br/wp-content/uploads/2016/09/receita-macarrao-aromatico.jpg',
                    has3d: true,
                    valor: 10.1,
                    valor_nutricional: 20.2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    ds_prato: 'Descrição teste 02',
                    nome: 'Famosa panqueca da utf (lendária)',
                    imagem: 'https://mf.b37mrtl.ru/rbthmedia/images/2021.02/original/6031bc6015e9f90a392b1ee6.jpg',
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
