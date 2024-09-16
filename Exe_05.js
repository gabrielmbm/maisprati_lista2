// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let alunos = [
    { nome: "João", nota1: 5, nota2: 8 },
    { nome: "Maria", nota1: 9, nota2: 2 },
    { nome: "José", nota1: 1, nota2: 4 },
    { nome: "Cida", nota1: 9, nota2: 9 }
];

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log('Aluno: ' + aluno.nome + '. Média final: ' + media);
}