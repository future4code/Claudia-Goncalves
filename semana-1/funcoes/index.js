// function minhaFuncao(variavel) {
//   return variavel * 5;
// }

// minhaFuncao(2);
// minhaFuncao(10);

/*
Resposta: 
a) 10 50
b) nao apareceria nada
*/

//----------------------------------

let textoDoUsuario = prompt('Insira um texto');

const outraFuncao = function (texto) {
  return texto.toLowerCase().includes('cenoura');
};

const resposta = outraFuncao(textoDoUsuario);
console.log(resposta);

// resposta
//essa funcao recebe o texto do usuario e pesquisa se no conteudo dessa frase contem a palavra cenoura

//1 - EU GOSTO DE CENOURA (true)
//2-  CENOURA É BOM PRA VISTA (true)
//3 - CENOURAS CRESCEM NA TERRA (false)
