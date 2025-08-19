let computador = {
    nome: "Laptop",
    marca: "Dell",
    modelo: "XPS 13",
    valor: 5000,
    ano: 2021,
    OutrasCaracteristicas: ['Tela 13.3"', 'Processador i7', '16GB RAM', '512GB SSD'],
    Atendimento: true,
    Garantia: true,
    Descricao: "Um laptop compacto e poderoso, ideal para profissionais e estudantes.",
    Imagem: "https://example.com/laptop.jpg"

};

if (computador.Atendimento === true && computador.Garantia === true) {
    console.log("Quem adquirir o laptop " + computador.modelo + " da marca " + computador.marca + " terá atendimento de suporte exclusivo disponível durante o período de garantia");
} else {
    console.log("O laptop " + computador.modelo + " da marca " + computador.marca + " não oferece atendimento de suporte exclusivo.");
}

if (computador.Garantia === true) {
    computador.Garantia = "1 ano";
    console.log("O laptop " + computador.modelo + " da marca " + computador.marca + " possui garantia de " + computador.Garantia + ".");
} else {
    console.log("O laptop " + computador.modelo + " da marca " + computador.marca + " não possui garantia.");
}

console.log("Descrição do produto: " + computador.Descricao);
console.log("Imagem do produto: " + computador.Imagem);
console.log("Outras características: " + computador.OutrasCaracteristicas.join(", "));
console.log("Valor do produto: R$ "+ computador['valor'].toFixed(2));