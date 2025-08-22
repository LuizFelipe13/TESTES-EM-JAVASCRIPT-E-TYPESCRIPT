function funcionario(nome, Área, cargo) {
    return {
        nome: nome,
        Área: Área,
        cargo: cargo,
        apresentar: function () {
            console.log(`Nome: ${this.nome}, Área: ${this.Área}, Cargo: ${this.cargo}`);
        }

    }
};


let func1 = funcionario("Luiz Felipe", "Suporte", "Analista de Suporte");
let func2 = funcionario("Maria Clara", "Desenvolvimento", "Desenvolvedora Front-End");
let func3 = funcionario("Carlos Eduardo", "Marketing", "Analista de Marketing");

console.log(typeof func1);
console.log(func1);
func1.apresentar();
console.log(typeof func2);
console.log(func2);
func2.apresentar();
console.log(typeof func3);
console.log(func3);
func3.apresentar();

