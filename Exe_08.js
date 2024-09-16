// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

let filmes = [
    { titulo: "O Senhor dos Anéis: A sociedade do anel", diretor: "Peter Jackson", anoLancamento: 2001 },
    { titulo: "Harry Potter e a pedra filosofal", diretor: "Chris Columbus", anoLancamento: 2001 },
    { titulo: "Vida de Inseto", diretor: "John Lasseter e Andrew Stanton", anoLancamento: 1998 }
];

let titulosDosFilmes = []

filmes.forEach(filme => {
    titulosDosFilmes.push(filme.titulo);
});

console.log(filmes)
console.log(titulosDosFilmes)