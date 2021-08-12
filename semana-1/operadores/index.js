/*
const bool1 = true;
const bool2 = false;
const bool3 = !bool2; // true

let resultado = bool1 && bool2;
console.log('a. ', resultado); // false

resultado = bool1 && bool2 && bool3;
console.log('b. ', resultado); // false

resultado = !resultado && (bool1 || bool2); // true
console.log('c. ', resultado); //true

console.log('d. ', typeof resultado); // boolean
*/

/*
let primeiroNumero = Number(prompt('Digite um numero!'));
let segundoNumero = Number(prompt('Digite outro numero!'));

const soma = primeiroNumero + segundoNumero;

console.log(soma);
*/

//------------EXERCÍCIOS--------------
/*a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

*/
/*
let idadeUsuario = Number(prompt('Informe a sua idade:'));
let idadeAmigo = Number(prompt('Informe a idade do seu amigo ou amiga'));
let idadeMaior = idadeUsuario > idadeAmigo;
let diferencaIdade = idadeUsuario - idadeAmigo;
console.log('Sua idade é maior do que a do seu amigo?', idadeMaior);
console.log(
  'A diferença de idade entre você e seu amigo é de',
  diferencaIdade,
  'anos'
);
*/
//----------------------------------------------------------------
/*
let numeroPar = Number(prompt('Insira um número par:'));
resultado = numeroPar % 2;
console.log(resultado);
//Os números pares possuem resto 0 e os ímpares possuem resto 1
*/

//----------------------------------------------------------------
/*
let idade = Number(prompt('Informe a sua idade:'));
let meses = 12;
let dias = 365;
let hora = 24;
let horas = hora * dias * idade;
let resultadoMeses = idade * meses;
let resultadoDias = idade * dias;
let resultadoHoras = idade * horas;

console.log('Sua idade em meses é:', resultadoMeses, 'meses');
console.log('Sua idade em dias é:', resultadoDias, 'dias');
console.log('Sua idade em horas é:', resultadoHoras, 'horas');
*/
//----------------------------------------------------------------
/*
let numero1 = Number(prompt('Informe um número:'));
let numero2 = Number(prompt('Informe outro número:'));
let maior = numero1 > numero2;
let igualdade = numero1 === numero2;
let divisao = numero1 % numero2 === 0;
let divisao2 = numero2 % numero1 === 0;

console.log('O primeiro numero é maior que segundo?', maior);
console.log('O primeiro numero é igual ao segundo?', igualdade);
console.log('O primeiro numero é divisível pelo segundo?', divisao);
console.log('O segundo numero é divisível pelo primeiro?', divisao2);
*/
