// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPar = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayPar.push(array[i]);
    }
  }
  return arrayPar;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let potencia = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      potencia.push(array[i] ** 2);
    }
  }
  return potencia;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNum = Math.max(num1, num2);
  let menorNum = Math.min(num1, num2);
  return {
    maiorNumero: maiorNum,
    maiorDivisivelPorMenor: maiorNum % menorNum === 0,
    diferenca: maiorNum - menorNum,
  };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const resultado = [];

  for (let i = 0; i < n; i++) {
    resultado[i] = 2 * i;
  }

  return resultado;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
    return 'Escaleno';
  } else if (ladoA === ladoB && ladoB === ladoC) {
    return 'Equilátero';
  } else {
    return 'Isósceles';
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${
    filme.ano
  }, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return { ...pessoa, nome: 'ANÔNIMO' };
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
