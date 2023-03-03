/*
Solicitar o nome do aluno e as 3 notas do bimestre, calcular a média daquele aluno.

Média para passar > 6

Se o aluno passou do bimestre, dar parabéns
Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.
em ambos os casos, mostre uma mensagem com o nome do alunos e a nota.

*/

// Nome do estudante
let nameStudent = prompt(`
  📚 CALCULO MÉDIA NOTA ALUNO 📚

  Aluno, informe o seu nome:
`)

// Notas do estudante
let note1 = prompt(`Informe a primeira nota:`)
let note2 = prompt(`Informe a segunda nota:`)
let note3 = prompt(`Informe a terceira nota:`)

//Verificar se notas digitadas estão entre 0 e 10
if (
  note1 < 0 ||
  note1 > 10 ||
  note2 < 0 ||
  note2 > 10 ||
  note3 < 0 ||
  note3 > 10
) {
  alert(`⛔ Informe notas apenas entre 0 e 10 ⛔`)
} else {
  //Média das 3 Notas
  let calculateAverage = (Number(note1) + Number(note2) + Number(note3)) / 3

  // Uma casa decimal após virgula, e ponto por virgula ao exibir média
  let average = calculateAverage.toFixed(1).replace(".", ",")

  //Condicionais de verificação
  let approved = calculateAverage > 6
  let disapproved = calculateAverage < 3

  if (approved) {
    alert(`
      Parabéns 🥳 ${nameStudent}! 
      Sua média foi ${average}, você passou! 
    `)
  } else if (disapproved) {
    alert(`
        ${nameStudent} sua média foi ${average}. Infelizmente você foi reprovado😣!  
      `)
  } else {
    alert(`
        ${nameStudent} infelizmente você não passou 🥲! 
        Sua média foi ${average}. Estude para a prova de recuperação 📘
      `)
  }
}
