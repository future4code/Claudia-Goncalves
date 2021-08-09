/*
let a = 10;
let b = 10;

console.log(b);

b = 5;
console.log(a, b);

Será impresso:
10
10 5
*/

/*
let a = 10;
let b = 20;
c = a;
b = c;
a = b;

console.log(a, b, c);

Será impresso:
10 10 10
*/
/*
let horasTrabalhoDia = prompt('Quantas horas você trabalha por dia?');
let salarioDia = prompt('Quanto você recebe por dia?');
alert(`Voce recebe ${salarioDia / horasTrabalhoDia} por hora`);*/

let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);
// impresso undefined, pois a variável nao foi definida

nome = prompt('Qual é o seu nome?');
idade = prompt('Qual a sua idade?');

console.log(typeof nome);
console.log(typeof idade);
// agora o tipo de variável foi alterado para string

alert(`Olá ${nome}, você tem ${idade} anos.`);

let pergunta1 = prompt('Você está usando roupa azul hoje?');
let pergunta2 = prompt('Você é feliz?');
let pergunta3 = prompt('Você tem cachorro?');

console.log(`Você está usando roupa azul hoje? - ${pergunta1}`);
console.log(`Você é feliz? - ${pergunta2}`);
console.log(`Você tem cachorro? - ${pergunta3}`);

let a = 10;
let b = 25;
c = a; // c=10
a = b; //a =25
b = c;

console.log('O novo valor de a é', a); // O novo valor de a é 25
console.log('O novo valor de b é', b); // O novo valor de b é 10
