// Exercícios de interpretação de código

// const filme = {
//   nome: 'Auto da Compadecida',
//   ano: 2000,
//   elenco: [
//     'Matheus Nachtergaele',
//     'Selton Mello',
//     'Denise Fraga',
//     'Virginia Cavendish',
//   ],
//   transmissoesHoje: [
//     { canal: 'Telecine', horario: '21h' },
//     { canal: 'Canal Brasil', horario: '19h' },
//     { canal: 'Globo', horario: '14h' },
//   ],
// };

// console.log(filme.elenco[0]);   // Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]);  // Virginia Cavendish
// console.log(filme.transmissoesHoje[2]);  //{canal: "Globo", horario: "14h"}

//--------------

// const cachorro = {
//   nome: 'Juca',
//   idade: 3,
//   raca: 'SRD',
// };

// const gato = { ...cachorro, nome: 'Juba' };

// const tartaruga = { ...gato, nome: gato.nome.replaceAll('a', 'o') };

// console.log(cachorro);
// //const cachorro = {
// // 	nome: "Juca",
// // 	idade: 3,
// // 	raca: "SRD"
// // }
// console.log(gato);
// // const cachorro = {
// //   nome: 'Juba',
// //   idade: 3,
// //   raca: 'SRD',
// // };
// console.log(tartaruga);
// // const cachorro = {
// //   nome: 'Jubo',
// //   idade: 3,
// //   raca: 'SRD',
// // };

// //b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// // //cria uma cópia inteira do objeto referido anteriormente, podendo assim mudar ou adicionar propriedades

// // //--------------

// function minhaFuncao(objeto, propriedade) {
//   return objeto[propriedade];
// }

// const pessoa = {
//   nome: 'Caio',
//   idade: 23,
//   backender: false,
// };

// console.log(minhaFuncao(pessoa, 'backender'));
// // false
// // retornou false pois é o valor da chave backender
// console.log(minhaFuncao(pessoa, 'altura'));
// // undefined
// retornou undefines pois é o objeto nao possui s propriedade altura

// //--------------

const dados = {
  nome: 'Claudia',
  apelidos: ['Claudinha', 'Dinha', 'Kakau'],
};

console.log(
  `Eu sou ${dados.nome}, mas você pode me chamar de: ${dados.apelidos[0]}, ${dados.apelidos[1]}, ${dados.apelidos[2]}`
);

//--------------

const novosDados = {
  ...dados,
  apelidos: ['Kau', 'Dininha', 'Dindinha'],
};

console.log(
  `Eu sou ${novosDados.nome}, mas você pode me chamar de: ${novosDados.apelidos[0]}, ${novosDados.apelidos[1]}, ${novosDados.apelidos[2]}`
);

//--------------

// const dadosProfissionais1 = {
//   nome: 'Claudia',
//   idade: 30,
//   profissao: 'Desenvolvedora FullStack',
// };

// const dadosProfissionais2 = {
//   nome: 'Kira',
//   idade: 28,
//   profissao: 'Lolzeiro',
// };

// const retornaArray = (array) => {
//   return (
//     dadosProfissionais.nome,
//     dadosProfissionais1.nome.length,
//     dadosProfissionais1.idade,
//     dadosProfissionais1.profissao,
//     dadosProfissionais1.profissao.length
//   );
// };
// console.log(informacao[dadosProfissionais1]);
// //console.log(informacao[dadosProfissionais2]);

// //--------------

const carrinho = [];

const fruta1 = {
  nome: 'banana',
  disponibilidade: 'true',
};

const fruta2 = {
  nome: 'uva',
  disponibilidade: 'true',
};

const fruta3 = {
  nome: 'manga',
  disponibilidade: 'true',
};

function frutas(fruta) {
  carrinho.push(fruta);
}

frutas(fruta1);
frutas(fruta2);
frutas(fruta3);

console.log(carrinho);
