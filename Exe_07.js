// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let produtos = [
    { nome: "Celular", preco: 2000, desconto: 0 },
    { nome: "Notebook", preco: 3500, desconto: 0 },
    { nome: "Tablet", preco: 1500, desconto: 0 }
];

produtos.forEach(produto => {
    produto.desconto = 0.10 * produto.preco;
    let novoPreco = produto.preco - produto.desconto;
    console.log('Produto: ' + produto.nome + ' / Preço final R$' + novoPreco);
});
