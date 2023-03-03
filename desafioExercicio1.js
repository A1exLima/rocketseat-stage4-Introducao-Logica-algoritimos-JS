let numberEquality // igualdade entre numeros
let evenOrOdd // par ou impar

let number1 = Number(prompt(`
  CALCULADORA SIMPLES 🧮

  Digite o primeiro número:

`))

let number2 = Number(prompt(` Digite o segundo número:`))

let sum, subtract, multiplication, division, restDivision

sum = number1 + number2
subtract = number1 - number2
multiplication = number1 * number2
division = number1 / number2
restDivision = number1 % number2

if( number1 == number2){
  numberEquality = 'Os números inseridos são IGUAIS!'
}else{
  numberEquality = 'Os número inseridos são DIFERENTES!'
}
//Identificamos se um número é par ou ímpar quando o dividimos por dois. Se o resto da divisão for zero, o número é par; caso contrário, é ímpar.
evenOrOdd = sum % 2
if (evenOrOdd == 0){
  evenOrOdd = `A soma dos dois números é PAR: ${sum}`
}else{
  evenOrOdd = `A soma dos dois números é ÍMPAR: ${sum}`
}

alert(`
  O resultado das operações são:
  
  Soma: ${sum}
  Subtração: ${subtract}
  Multiplicação: ${multiplication}
  Divisão: ${division}
  Resto da divisão: ${restDivision}
  ${numberEquality}
  ${evenOrOdd}
`)

