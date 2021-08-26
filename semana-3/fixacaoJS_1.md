ˋˋˋ javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let salarioFixo = 2000
  let comissao = 100 * qtdeCarrosVendidos
  let comissaoPorcentagem = valorTotalVendas * 0.05
  let salarioFinal

  salarioFinal = salarioFixo + comissao + comissaoPorcentagem

  return salarioFinal
}
ˋˋˋ
