// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let vendas = [
    { produto: "Celular", quantidade: 10, valor: 1000 },
    { produto: "Notebook", quantidade: 5, valor: 2000 },
    { produto: "Tablet", quantidade: 8, valor: 1500 }
];

let valorTotalVendas = 0;

vendas.forEach(venda => {
    valorTotalVendas += venda.quantidade * venda.valor;
});

console.log('Valor total de vendas: R$' + valorTotalVendas);