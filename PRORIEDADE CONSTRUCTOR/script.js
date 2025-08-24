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