// Notação literal de objeto

let pessoa = {
    nome: 'João',
    idade: 25
};

console.log(pessoa.constructor); // [Function: Object]

// Usando a função construtora Object
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

let pessoa1 = new Pessoa('Maria', 30);
let pessoa2 = new Pessoa('Pedro', 22);

console.log(pessoa1.constructor); // [Function: Pessoa]
console.log(pessoa2.constructor); // [Function: Pessoa]

// Outra forma de criar objetos
function criarArvore(especie, temFrutos) {
    return {
        especie: especie,
        temFrutos: temFrutos
    };
}
let arvore = criarArvore('Manga', true);
console.log(arvore); // {especie: 'Manga', temFrutos: true}
console.log(arvore.constructor); // [Function: Object]