// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

let empresa = {
    departamentos: [
        {
            nome: "Recursos Humanos",
            funcionarios: [
                { nome: "Olívia" },
                { nome: "Amanda" }
            ]
        },
        {
            nome: "Desenvolvimento",
            funcionarios: [
                { nome: "Gabriel" },
                { nome: "Carlos" }
            ]
        },
        {
            nome: "Marketing",
            funcionarios: [
                { nome: "Brenda" },
                { nome: "Lara" }
            ]
        }
    ]
};

for (let i in empresa.departamentos) {
    console.log('#####')
    let departamento = empresa.departamentos[i];
    console.log('Departamento: ' + departamento.nome);
    for (let funcionario of departamento.funcionarios) {
        console.log('Funcionário: ' + funcionario.nome + ' - Departamento: ' + departamento.nome);
    }
}