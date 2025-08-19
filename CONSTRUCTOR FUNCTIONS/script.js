function carro(marca, modelo, ano, cor){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;

    this.exibirDetalhes = function() {
        console.log('Marca: ' + this.marca + ', Modelo: ' + this.modelo +',  Ano: ' + this.ano + ', Cor: ' + this.cor);
    };
}

let carro1 = new carro('Ford', 'Mustang', 2020, 'Vermelho');
let carro2 = new carro('Chevrolet', 'Camaro', 2021, 'Amarelo');
let carro3 = new carro('Tesla', 'Model S', 2022, 'Preto');

console.log(carro1.marca);
carro1.exibirDetalhes();
console.log(carro2.marca);
carro2.exibirDetalhes();
console.log(carro3.marca);
carro3.exibirDetalhes();