//Definindo uma função construtora
function Funcionario(nome, idade, departamento){
    this.nome = nome;
    this.idade = idade;
    this.departamento = departamento;
}

let funcionario1 = new Funcionario('Ana', 28, 'RH');
let funcionario2 = new Funcionario('Carlos', 35, 'TI');

console.log(funcionario1 instanceof Funcionario); // true
console.log(funcionario2 instanceof Funcionario); // true
console.log(funcionario1 instanceof Object); // true
console.log(funcionario2 instanceof Object); // true
console.log(funcionario1 instanceof Array); // false    
console.log(funcionario2 instanceof Array); // false

// Polimorfismo com instanceof
function processarForma(forma) {
  if (forma instanceof Circulo) {
    console.log('A área do círculo é: ' + Math.PI * forma.raio * forma.raio);
  } else if (forma instanceof Quadrado) {
    console.log('A área do quadrado é: ' + forma.lado * forma.lado);
  }
}

// Tipos primitivos
console.log('Texto' instanceof String); // false
console.log(123 instanceof Number); // false
console.log(true instanceof Boolean); // false

// Objetos criados com construtores
let strObj = new String('Texto');
let numObj = new Number(123);
let boolObj = new Boolean(true);

console.log(strObj instanceof String); // true
console.log(numObj instanceof Number); // true
console.log(boolObj instanceof Boolean); // true




    
