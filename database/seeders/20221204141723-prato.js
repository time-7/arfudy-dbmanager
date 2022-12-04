module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'prato',
            [
                {
                    ds_prato: 'Descrição teste 01',
                    nome: 'Macarronada ao molho sugo abolonhesado',
                    imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fclaudia.abril.com.br%2Fgastronomia%2F30-receitas-macarrao%2F&psig=AOvVaw0G1k9EbX-yKK6ofLLvJ-Ya&ust=1670277284041000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLCb3vP54PsCFQAAAAAdAAAAABAW',
                    has3d: true,
                    valor: 10.1,
                    valor_nutricional: 20.2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    ds_prato: 'Descrição teste 02',
                    nome: 'Famosa panqueca da utf (lendária)',
                    imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.rbth.com%2Freceitas%2F85091-blini-com-carne-picadinha-receita&psig=AOvVaw1K3lhOo2X1DlXuYWL_c29x&ust=1670277360400000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCND0r5j64PsCFQAAAAAdAAAAABAD',
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
