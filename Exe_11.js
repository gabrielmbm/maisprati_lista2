// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

let pedidos = [
    { cliente: "Maria", produto: "Iogurte", quantidade: 3 },
    { cliente: "Maria", produto: "Chocolate", quantidade: 2 },
    { cliente: "José", produto: "Ovo", quantidade: 6 },
    { cliente: "José", produto: "Manteiga", quantidade: 1 },
    { cliente: "João", produto: "Arroz", quantidade: 2 }
];

let quantidadePorCliente = {};

pedidos.forEach(pedido => {
    if (quantidadePorCliente[pedido.cliente]) {
        quantidadePorCliente[pedido.cliente] += pedido.quantidade;
    } else {
        quantidadePorCliente[pedido.cliente] = pedido.quantidade;
    }
});

console.log(quantidadePorCliente);