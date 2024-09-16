// Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console

// const prompt = require('prompt-sync')();

let carro = {
    marca: "GM",
    modelo: "Celta",
    ano: 2003,
    cor: "Prata"
};

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}