let pessoa = {
    nome: "Luiz Felipe",
    falar: function() {
        console.log(`Meu nome é ${this.nome}`);
    }
};
console.log(pessoa);
pessoa.falar(); // Método que já tem o console.log dentro dele
console.log(pessoa.falar()); // Essa parte aparece como undefined porque o método já imprime o nome
