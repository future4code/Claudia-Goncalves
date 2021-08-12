// let array;
// console.log('a. ', array); // undefined

// array = null;
// console.log('b. ', array); // null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log('c. ', array.length); // 11

// let i = 0;
// console.log('d. ', array[i]); // 3

// array[i + 1] = 19;
// console.log('e. ', array); // 11

// const valor = array[i + 6];
// console.log('f. ', valor); // 9

//-----------------------------------------

// const frase = prompt('Digite uma frase');

// console.log(frase.toUpperCase().replaceAll('A', 'I'), frase.length);
// // entrada: "Subi num ônibus em Marrocos"
// // saida: "SUBI NUM ÔNIBUS EM MIRROCOS" (27)

//-----------------------------------------

// const nomeUser = prompt('Informe o seu nome:');
// const emailUser = prompt('Informe o seu Email:');

// console.log(
//   `O email ${emailUser} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeUser}!`
// );

//-----------------------------------------

// let comidasFavoritas = [
//   'Strogonoff',
//   'Lasanha',
//   'Batata-frita',
//   'Purê de batatas',
//   'Cachorro-quente',
// ];

// console.log(comidasFavoritas);

// console.log('Essa são as minhas comidas preferidas: ');
// console.log(comidasFavoritas[0]);
// console.log(comidasFavoritas[1]);
// console.log(comidasFavoritas[2]);
// console.log(comidasFavoritas[3]);
// console.log(comidasFavoritas[4]);

// let comidaFavoritaUser = prompt('Qual a sua comida favorita?');
// comidasFavoritas[1] = comidaFavoritaUser; // substituindo elemento na posição 1 pelo elemento informado pelo usuário
// console.log(comidasFavoritas);

//---------------------------------

listaDeTarefas = [];
console.log(listaDeTarefas);
tarefa1 = prompt('Informe uma tarefa que você precisa realizar hoje: ');
tarefa2 = prompt('Informe uma tarefa que você precisa realizar hoje: ');
tarefa3 = prompt('Informe uma tarefa que você precisa realizar hoje: ');

listaDeTarefas.push(tarefa1, tarefa2, tarefa3);

console.log(`Lista de tarefas do usuário: ${listaDeTarefas} `);

let indice = Number(
  prompt('Digite uma tarefa que você já realizou: 1, 2 ou 3')
);
//console.log(typeof indice);

listaDeTarefas.splice([indice - 1], 1);
console.log(`Lista de tarefas atualizada: ${listaDeTarefas}`);
