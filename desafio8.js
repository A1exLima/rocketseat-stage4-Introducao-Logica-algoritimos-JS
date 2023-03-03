/*
Crie uma lista de pacientes

Cada paciente dentro da lista, deverá conter

NOME
IDADE
PESO
ALTURA

Escreva uma lista contendo o nome dos pacientes
*/

let listPatientsName = []
let listPatientsAge = []
let listPatientsWeight = []
let listPatientsHeight = []

let dataPatients = [
  {
    name: "Alex",
    age: 32,
    weight: 71,
    height: 166,
  },
  {
    name: "Andressa",
    age: 26,
    weight: 55,
    height: 156,
  },
  {
    name: "João",
    age: 12,
    weight: 45,
    height: 131,
  },
]

for (let list of dataPatients) { //Evitar usar o mesmo nome da variavel lida
  listPatientsName.push(list.name)
  listPatientsAge.push(list.age)
  listPatientsWeight.push(list.weight)
  listPatientsHeight.push(list.height)
}

for (let index = 0; index < dataPatients.length; index++) {
  alert(
    `${listPatientsName[index]} tem ${listPatientsAge[index]} anos, pesa ${listPatientsWeight[index]} e possui uma altura de ${listPatientsHeight[index]}.`
  )
}
