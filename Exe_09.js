// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clientes = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 40, cidade: "Belo Horizonte" },
    { nome: "Ana", idade: 28, cidade: "Curitiba" }
];

let i = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        i++;
    }
});

console.log('Número de clientes com mais de 30 anos: ' + i);