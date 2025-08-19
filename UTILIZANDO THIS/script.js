let pessoa = {
    nome: "João",
}

pessoa.idade = 33;

pessoa.apresentacao = function(){
    console.log('Olá, meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos.');
}

pessoa.apresentacao();