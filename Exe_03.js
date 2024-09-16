// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

const prompt = require('prompt-sync')();

let produto = {
    descricao: "Notebook",
    preco: 3500,
    estoque: 50,
    peso: 2.5,
    desconto: 300
};

function filtrarPropriedades(obj, valorMinimo) {
    let novoObjeto = {};

    for (let propriedade in obj) {
        if (obj[propriedade] > valorMinimo) {
            novoObjeto[propriedade] = obj[propriedade];
        }
    }

    return novoObjeto;
}

let valor = Number(prompt('Digite o valor mínimo: '))

let propriedadesFiltradas = filtrarPropriedades(produto, valor);
console.log(propriedadesFiltradas);