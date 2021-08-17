//--------------------------- Exercícios de interpretação de código ----------------------------//

// const respostaDoUsuario = prompt('Digite o número que você quer testar');
// const numero = Number(respostaDoUsuario);

// if (numero % 2 === 0) {
//   console.log('Passou no teste.');
// } else {
//   console.log('Não passou no teste.');
// }

// a) O código pega a resposta do usuário, tranforma em número e testa se o resultado da divisão desse número por 2 é zero.
// b) Números pares.
// c) Números ímpares

//--------------------------- Exercícios de interpretação de código ----------------------------//
// let fruta = prompt('Escolha uma fruta');
// let preco;
// switch (fruta) {
//   case 'Laranja':
//     preco = 3.5;
//     break;
//   case 'Maçã':
//     preco = 2.25;
//     break;
//   case 'Uva':
//     preco = 0.3;
//     break;
//   case 'Pêra':
//     preco = 5.5;
//   //break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5;
//     break;
// }
// console.log('O preço da fruta', fruta, 'é', 'R$ ', preco);

// a) Serve para que o usuário selecione uma fruta e irá retornar o seu nome e valor.
// b) "O preço da fruta maçã é R$ 2.25"
// c) "O preço da fruta pêra é R$ 5 "

//--------------------------- Exercícios de interpretação de código ----------------------------//

//const numero = Number(prompt('Digite o primeiro número.'));

// if (numero > 0) {
//   console.log('Esse número passou no teste');
//   console.log(mensagem);
// }
// let mensagem = 'Essa mensagem é secreta!!!';

// a) Está recebendo do usuário o número
// b) "Esse número passou no teste"
// c) Sim, haverá erro na variável 'mensagem', pois ela foi declarada dentro do bloco if. Digitando -10 e se a variavél estivesse fora do escopo do bloco, executaria  'Essa mensagem é secreta!!!'

//--------------------------- Exercícios de escrita de código ----------------------------//

// const idade = Number(prompt('Informe a sua idade:'));

// if (idade >= 18) {
//   console.log(`Você pode dirigir`);
// } else {
//   console.log(`Você não pode dirigir`);
// }
//--------------------------- Exercícios de escrita de código ----------------------------//

// const turno = prompt(
//   'Em qual turno vc estuda? digite [M] (matutino) | [V] (Vespertino) | [N] (Noturno)'
// ).toUpperCase();
// console.log(turno);

// if (turno === 'M') {
//   console.log('Bom Dia!');
// } else if (turno === 'V') {
//   console.log('Boa Tarde!');
// } else if (turno === 'N') {
//   console.log('Boa Noite!');
// } else {
//   console.log('Informe um valor válido!!!');
// }

// const turnoUser = (turno) => {
//   switch (turno) {
//     case 'M':
//       console.log('Bom Dia!');
//       break;
//     case 'V':
//       console.log('Boa Tarde!');
//       break;
//     case 'N':
//       console.log('Boa Noite!');
//       break;
//     default:
//       console.log('Informe um valor válido!!!');
//   }
// };

// turnoUser(turno);

//--------------------------- Exercícios de escrita de código ----------------------------//

// let generoFilme = prompt(
//   'Qual o genero do filme que irão assistir?'
// ).toLowerCase();
// let valorIngresso = Number(prompt('Qual o valor do ingresso?'));
// let lanchinho = prompt('Qual snack que você quer comprar? ');

// if (generoFilme === 'fantasia' && valorIngresso <= 15) {
//   console.log(`Bom filme e aproveite o seu ${lanchinho}`);
// } else {
//   console.log('Escolha outro filme :( ');
// }

//--------------------------- DESAFIOS ----------------------------//

let nomeCompleto = prompt('Informe seu nome completo:');
let tipoJogo = prompt(
  'Informe o tipo de jogo: [IN] internacional | [DO] doméstico'
).toUpperCase();
let etapaJogo = prompt(
  'Informe a etapa do jogo: [SF] SEMI-FINAL | [DT] terceiro lugar | [FI] final'
).toUpperCase();
let categoriaJogo = prompt(
  'Informe a categoria do jogo: [1] | [2] | [3] | [4]'
);
let quantidadeIngresso = prompt('Informe a quantidade de ingressos:');

const valorIngresso = (tipo, etapa, catergoria) => {
  switch ((tipo, etapa, catergoria) {}
}

const compra = {
  nomeCompleto: nomeCompleto,
  tipoJogo: tipoJogo,
  etapaJogo: etapaJogo,
  categoriaJogo: categoriaJogo,
  quantidadeIngresso: quantidadeIngresso,

};


