// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

const prompt = require('prompt-sync')();

let funcionarios = [
    { nome: "Fabio", cargo: "Gerente", salario: 9300 },
    { nome: "Gabriel", cargo: "Projetista", salario: 5500 },
    { nome: "Matheus", cargo: "Desenhista", salario: 3800 },
    { nome: "Gustavo", cargo: "Estagiário", salario: 1500 }
];

let salarioMinimo = Number(prompt('Digite o valor mínimo para filtro: '));

for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log('Nome: ' + funcionario.nome + '. Cargo: ' + funcionario.cargo + '. Salário: R$' + funcionario.salario);
    }
}