//---------------INTERPRETAÇÃO---------------
//const usuarios = [
//   { nome: 'Amanda Rangel', apelido: 'Mandi' },
//   { nome: 'Laís Petra', apelido: 'Laura' },
//   { nome: 'Letícia Chijo', apelido: 'Chijo' },
// ];

// const novoArrayA = usuarios.map((item, index, array) => {
//   console.log(item, index, array);
// });

//a) O que vai ser impresso no console?
// [nome: "Amanda Rangel", apelido: "Mandi"] 0
// [nome: "Laís Petra", apelido: "Laura"] 1
// [nome: "Letícia Chijo", apelido: "Chijo"] 2

//---------------INTERPRETAÇÃO---------------
// const usuarios = [
//   { nome: 'Amanda Rangel', apelido: 'Mandi' },
//   { nome: 'Laís Petra', apelido: 'Laura' },
//   { nome: 'Letícia Chijo', apelido: 'Chijo' },
// ];

// const novoArrayB = usuarios.map((item, index, array) => {
//   return item.nome;
// });

// console.log(novoArrayB);

//a) O que vai ser impresso no console?
//["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

//---------------INTERPRETAÇÃO---------------

// const usuarios = [
//   { nome: 'Amanda Rangel', apelido: 'Mandi' },
//   { nome: 'Laís Petra', apelido: 'Laura' },
//   { nome: 'Letícia Chijo', apelido: 'Chijo' },
// ];

// const novoArrayC = usuarios.filter((item, index, array) => {
//   return item.apelido !== 'Chijo';
// });

// console.log(novoArrayC);

//a) O que vai ser impresso no console?
//{nome: 'Amanda Rangel', apelido: 'Mandi',  nome: 'Laís Petra', apelido: 'Laura'}

//---------------ESCRITA---------------

// const pets = [
//   { nome: 'Lupin', raca: 'Salsicha' },
//   { nome: 'Polly', raca: 'Lhasa Apso' },
//   { nome: 'Madame', raca: 'Poodle' },
//   { nome: 'Quentinho', raca: 'Salsicha' },
//   { nome: 'Fluffy', raca: 'Poodle' },
//   { nome: 'Caramelo', raca: 'Vira-lata' },
// ];

//a) Crie um novo array que contenha apenas o nome dos doguinhos
// const nomePets = pets.map((item, index, array) => {
//   return item.nome;
// });
// console.log(nomePets);

//b) Crie um novo array apenas com os cachorros salsicha
// const salsichas = pets.filter((item, index, array) => {
//   return item.raca === 'Salsicha';
// });
// console.log(salsichas);

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

// const mensagemPoodles = pets.filter((item, index, array) => {
//   if (item.raca === 'Poodle') {
//     console.log(
//       `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
//     );
//   }
// });
// console.log(mensagemPoodles);

//---------------ESCRITA---------------

const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 },
];

//a) Crie um novo array que contenha apenas o nome de cada item
// const nomeProdutos = produtos.map((item, index, array) => {
//   return item.nome;
// });
// console.log(nomeProdutos);

//b)Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
// const desconto = produtos.map((item) => {
//   return {
//     nome: item.preco,
//     preco: (item.preco - item.preco * 0.05).toFixed(2),
//   };
// });
// console.log(desconto);

// c)Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const somenteBebidas = produtos.filter((item) => {
//   return item.categoria === 'Bebidas';
// });
// console.log(somenteBebidas);

//d)Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const objetoYpe = produtos.filter((item) => {
  return item.nome.includes('Ypê');
});

console.log(objetoYpe);

//e)Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const comprarYpe = objetoYpe.map((item) => {
  return `Compre ${item.nome} por ${item.preco}`;
});

console.log(comprarYpe);

//---------------DESAFIO---------------

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama' },
  { nome: 'Bellsprout', tipo: 'grama' },
  { nome: 'Charmander', tipo: 'fogo' },
  { nome: 'Vulpix', tipo: 'fogo' },
  { nome: 'Squirtle', tipo: 'água' },
  { nome: 'Psyduck', tipo: 'água' },
];

//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
const ordemAlfabetica = pokemons.map((item) => {
  return item.nome;
});
console.log(ordemAlfabetica.sort());

//b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**
