/*
**Jogo da Adivinhação**

1. Apresente uma mensagem ao usuário
“Adivinhe o número que estou pensando? Entre 0 e 10”

2. Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

3. Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  “Erro, tente novamente:”

4. Caso o usuário acerte o número, apresentar a mensagem:
“Parabéns! Você adivinhou o número em X tentativas”
Substitua o “X” da mensagem, pelo número de tentativas
*/

/*
let random
let listRandom = []
let i
for (i = 0; i < 10; i++) {
  random = (Math.random() * (10 - 0) + 0).toFixed(0) // Gera um numero aleatório inteiro entre 0 e 10
  listRandom[i] = random
  console.log(listRandom)
}
*/

let xAttempt = 1
let verification, random, number
random = (Math.random() * (10 - 0) + 0).toFixed(0) // Gera um numero aleatório inteiro entre 0 e 10

while (!verification) {
  number = prompt(`Adivinhe o número que estou pensando? Entre 0 e 10`)

  if (number < 0 || number > 10) {
    alert(`⛔⛔⛔ Digite um número entre 0 e 10 ⛔⛔⛔`)
  } else {
    
    verification = Number(number) == random

    if (verification) {
      alert(`Parabéns! Você adivinhou o número em ${xAttempt++} tentativas`)
    } else {
      alert("Erro, tente novamente:")
    }
    xAttempt++
  }
}
