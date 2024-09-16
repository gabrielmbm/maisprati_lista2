// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let estoque = [
    { produto: "Macarrão", quantidade: 5, minimo: 10 },
    { produto: "Arroz", quantidade: 15, minimo: 10 },
    { produto: "Feijão", quantidade: 8, minimo: 12 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2
    }
});

console.log(estoque);