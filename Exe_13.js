// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let carrinho = {
    itens: [
        { nome: "Bolacha", quantidade: 8, precoUnitario: 2.5 },
        { nome: "Farinha", quantidade: 1, precoUnitario: 5 },
        { nome: "Macarrão", quantidade: 5, precoUnitario: 3.5 },
        { nome: "Feijão", quantidade: 1, precoUnitario: 6 },
        { nome: "Água", quantidade: 10, precoUnitario: 2 },
        { nome: "Refrigerante", quantidade: 2, precoUnitario: 5 },
        { nome: "Chocolate", quantidade: 5, precoUnitario: 5 }
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
});

console.log('Valor total do carrinho: R$' + valorTotal)