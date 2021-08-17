// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!');

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  const alturaUser = Number(prompt('Informe a altura:'));
  const larguraUser = Number(prompt('Informe a largura:'));
  const area = alturaUser * larguraUser;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Informe o ano atual:'));
  const anoNascimento = Number(prompt('Informe seu ano de nascimento: '));
  const idade = anoAtual - anoNascimento;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt('Informe seu nome:');
  const idade = prompt('Informe sua idade:');
  const email = prompt('Informe seu email:');
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt('Informe sua 1ª cor favorita:');
  const corFavorita2 = prompt('Informe sua 2ª cor favorita:');
  const corFavorita3 = prompt('Informe sua 3ª cor favorita:');
  const coresFavoritas = [corFavorita1, corFavorita2, corFavorita3];
  console.log(coresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array.push(array[0]);
  array.includes();

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const igualdade = string1.includes(string2);
  return igualdade;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Informe o ano atual:'));
  const anoNascimento = Number(prompt('Informe o seu ano de nascimento:'));
  const anoIdentidade = Number(
    prompt('Informe o ano em que sua carteira de identidade foi emitida:')
  );

  const idadePessoa = anoAtual - anoNascimento;
  const idadeIdentidade = anoIdentidade - anoAtual;

  const renovar1 = idadePessoa <= 20 && idadeIdentidade >= 5;
  const renovar2 =
    idadePessoa > 20 && idadePessoa <= 50 && idadeIdentidade >= 10;
  const renovar3 = idadePessoa > 50 && idadeIdentidade >= 15;

  const resultado = renovar1 || renovar2 || renovar3;

  console.log(resultado);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
