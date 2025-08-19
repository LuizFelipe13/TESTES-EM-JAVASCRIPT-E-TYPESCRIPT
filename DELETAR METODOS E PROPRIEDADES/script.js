let casa = {
    cor: "azul",
    tamanho: "grande",
    descrever: function() {
        console.log(`A casa é ${this.cor} e tem um tamanho ${this.tamanho}.`);
    }
}
casa.tipo = "apartamento"; // Adicionando uma nova propriedade
casa.qtdeComodos = 5; // Adicionando outra propriedade
casa.valor = 300000 .toFixed(2); // Adicionando mais uma propriedade
casa.comodos = ["sala", "cozinha", "quarto", "banheiro", "varanda"]; // Adicionando uma propriedade com array
casa.anuncio = function() {
    console.log(`Vendo casa ${this.cor} de tamanho ${this.tamanho} com ${this.qtdeComodos} cômodos por R$ ${this.valor}.`);
}

delete casa.tipo; // Deletando a propriedade 'tipo'
delete casa.qtdeComodos; // Deletando a propriedade 'qtdeComodos'
delete casa.valor; // Deletando a propriedade 'valor'

console.log(casa);
casa.descrever(); // Método que já tem o console.log dentro dele
casa.anuncio(); // Método que imprime o anúncio da casa
