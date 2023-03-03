let listName = []
let listNoteP1 = []
let listNoteP2 = []
let listAverage = []
let listAprovation = []
let position = 0
let average

let listStudent = [
  {
    name: "Alex",
    noteP1: 10,
    noteP2: 5,
  },
  {
    name: "Andressa",
    noteP1: 5,
    noteP2: 4,
  },
  {
    name: "João",
    noteP1: 8.5,
    noteP2: 7.6,
  },
  {
    name: "Maria",
    noteP1: 2.5,
    noteP2: 9.9,
  },
]

for (let students of listStudent) {
  listName.push(students.name)
  listNoteP1.push(students.noteP1)
  listNoteP2.push(students.noteP2)

  listAverage.push(averageNote(listNoteP1[position], listNoteP2[position]))
  listAprovation.push(verificationAverage(listAverage[position]))

  alert(` 
    A média do(a) aluno(a) ${listName[position]} é: ${listAverage[position]}
    ${listName[position]} ${listAprovation[position]}
  `)
  position++
}

function averageNote(noteP1, noteP2) {
  average = (noteP1 + noteP2) / 2
  return average.toFixed(1)
}

function verificationAverage(averageStudent) {
  if (averageStudent >= 7) {
    return "parabéns você foi APROVADO(A), continue nesse ritmo 😲👌"
  } else {
    return "você foi REPROVADO(A), continue estudando 😉📚"
  }
}
