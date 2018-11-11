// criarum um objeto chamado pessoa contendo: idade - numero, nome: string, sobrenome, sexo...
var pessoa = {
  idade:20,
  nome: "Andreza",
  sobrenome: "Campbell",
  sexo: "Feminino",
  estado_civil: "casada",
  filmes_preferidos: ["x", "y", "z"]
}

//   printar na tela o objeto pessoa;
console.log(pessoa);

// trocar a idade para simular q ela fez aniversario;
pessoa.idade++
// ou
// pessoa.idade+=1
// pessoa.idade = pessoa.idade +1;

// adicionar à pessoa uma propriedade chamada estatura, com algum dado prefinino.
pessoa["estatura"] = 1.60;
// ou pessoa.estatura = 1.60;

// adicionar à pessoa um metodo chamado cumprimento(), que imprima na linha de comando o nome e o sobrenome da pessoa.

pessoa["cumprimento"] = function(){console.log("Ola, meu nome eh " + pessoa.nome + " " + pessoa.sobrenome)};
// ou pessoa.cumprimento = function(){console.log("Ola, meu nome eh " + pessoa.nome + " " + pessoa.sobrenome)};

// executar: pessoa.cumprimento();
pessoa.cumprimento();

// adicionar a pessoa um metodo chamado comer(), quer receba um parametro comida e q imprima na linha de comando: "Eu estou comendo: " e, em seguida, o nome da comida.
pessoa ["comer"] = function(comida){console.log("Estou comendo " + comida + "!")};
// ou
// pessoa.comer = function(comida){console.log("Estou comendo " + comida + "!"))}

// executar a funcao comer;
pessoa.comer("melao");
