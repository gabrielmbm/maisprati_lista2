// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

// const prompt = require('prompt-sync')();

let livro = {
    titulo: "Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos",
    autor: "Aditya Y. Bhargava",
    anoPublicacao: 2017,
    genero: "Programação"
};

let existeEditora = false;

for (let propriedade in livro) {
    if (propriedade === "editora") {
        existeEditora = true;
        break;
    }
}

if (!existeEditora) {
    livro.editora = "Novatec";
}

console.log(livro);