module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'prato',
            [
                {
                    nome: 'Torta de Maçã',
                    ds_prato:
                        'A torta de maçã tem um sabor doce suave e que pode ser servida bem quentinha com uma bola de sorvete, que dá um diferencial e um ar de sofisticação ao seu prato. Além disso, a maçã combina com diversos sabores e ingredientes que possam dar uma incrementada na sua torta, como as castanhas e a canela. Além disso, a noz-moscada dá um perfume especial para as receitas de torta de maçã.',
                    imagem: 'https://www.casalcozinha.com.br/wp-content/uploads/2020/11/receita-simples-e-caseira-de-torta-de-maca-1300x932.png',
                    has3d: true,
                    valor: 20,
                    valor_nutricional: 237,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Hossomaki de Pepino e Niguiri de Salmão',
                    ds_prato:
                        'O hossomaki de pepino é uma opção refrescante e saborosa de sushi, acompanhado do niguiri, tipo de sushi que consiste em um bolinho de arroz moldado à mão. O preparo inclui um pouco de wasabi e uma cobertura feita com uma fina camada de peixe.',
                    imagem: 'https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/kMaHauy3TNERqBUgaNwIPb3jozzrFkmzL7tCuGlG.jpg',
                    has3d: true,
                    valor: 35,
                    valor_nutricional: 182,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Croissant',
                    ds_prato:
                        'O croissant(crescente, em francês) é um pão de massa em formato de meia-lua. Com geleia, chocolate ou recheado, essa delícia é um item indispensável nas melhores padarias e cafés-da-manhã dos viajantes.',
                    imagem: 'https://conteudo.imguol.com.br/c/entretenimento/7a/2022/04/26/croissant-1650997921922_v2_4x3.jpg',
                    has3d: true,
                    valor: 12,
                    valor_nutricional: 406,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Panqueca',
                    ds_prato:
                        'Panqueca é um tipo de massa frita em pouco óleo sobre uma chapa ou frigideira quente. Existem muitas variações regionais de panquecas, algumas contendo fermento ou outros ingredientes.',
                    imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/130/714/320178/320178_original.jpg?mode=crop&width=710&height=400',
                    has3d: true,
                    valor: 10,
                    valor_nutricional: 227,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Capuccino',
                    ds_prato:
                        'Um cappuccino clássico, consiste em um terço de café expresso, um terço de leite vaporizado e um terço de espuma de leite vaporizado. O uso de chocolate em pó no cappuccino é uma prática comum, mas não faz parte da receita tradicional.',
                    imagem: 'https://www.cafefacil.com.br/media/product/383/capsula-nescafe-dolce-gusto-cappuccino-16-capsulas-nestle-020.jpg',
                    has3d: true,
                    valor: 8.95,
                    valor_nutricional: 87,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Pizza de Calabresa',
                    ds_prato:
                        'Pizza é uma disco de massa fermentada de farinha de trigo, coberto com molho de tomate e os ingredientes variados que normalmente incluem algum tipo de queijo, carnes preparadas ou defumadas e ervas, normalmente orégano ou manjericão, tudo assado em forno.',
                    imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/513d7a0ab11e38f7bd117d760146fed3_XL.jpg',
                    has3d: true,
                    valor: 68,
                    valor_nutricional: 1352,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('prato', null, {}),
}
