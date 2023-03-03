/*
DESAFIO 3:

Capturar 2 números e fazer as operações matemáticas de:
. Soma
. Subtração
. Multiplicação
. Divisão
. Resto da divisão
*/

let result, number1, number2, operation, nameOperation

operation = prompt(`🤖 CALCULADORA

Digite a opção:

1 SOMA
2 SUBTRAÇÃO
3 MULTIPLICAÇÃO
4 DIVISÃO
5 RESTO DA DIVISÃO
`)

if (operation <= 0 || operation >= 6) {
  alert("🤖 Opção invalida!")
} else {
  number1 = prompt("🤖 Informe o primeiro número:")
  number2 = prompt("🤖 Informe o segundo número:")

  number1 = Number(number1)
  number2 = Number(number2)
  
  switch (operation) {
    case "1":
      result = number1 + number2 //SOMA
      nameOperation = "Soma"
      break
    case "2":
      result = number1 - number2 //SUBTRACÃO
      nameOperation = "Subtração"

      break
    case "3":
      result = number1 * number2 //MULTIPLICAÇÃO
      nameOperation = "Multiplicação"
      break
    case "4":
      result = number1 / number2 //DIVISÃO
      nameOperation = "Divisão"
      break
    case "5":
      result = number1 % number2 //RESTO DIVISÃO
      nameOperation = "Resto de Divisão"
      break
  }

  alert(`🤖 Resultado da operação:  ${nameOperation} é ${result}`)
}
