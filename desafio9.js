/*
Dada a lista de pacientes, descubra o IMC de cada paciente e imprima
“Paciente X possui o IMC de: Y”
Onde X é o nome do paciente e Y é o IMC desse paciente
Crie uma função para fazer o cáculo do IMC
*/

let listPatientsName = []
let listPatientsAge = []
let listPatientsWeight = []
let listPatientsHeight = []
let listImc = []
let imc = 0
let dataPatients = [
  {
    name: "Alex",
    age: 32,
    weight: 30,
    height: 150,
  },
  {
    name: "Andressa",
    age: 26,
    weight: 55,
    height: 160,
  },
  {
    name: "João",
    age: 12,
    weight: 77,
    height: 166,
  },
  {
    name: "Maria",
    age: 15,
    weight: 95,
    height: 170,
  },
  {
    name: "José",
    age: 12,
    weight: 150,
    height: 180,
  },
]

for (let list of dataPatients) {
  //Evitar usar o mesmo nome da variavel lida
  listPatientsName.push(list.name)
  listPatientsAge.push(list.age)
  listPatientsWeight.push(list.weight)
  listPatientsHeight.push(list.height)
}

for (let index = 0; index < dataPatients.length; index++) {
  listImc[index] = calculateImc(
    listPatientsWeight[index],
    listPatientsHeight[index]
  )

  alert(`
    ${listPatientsName[index]} tem ${listPatientsAge[index]} anos, pesa ${
    listPatientsWeight[index]
  } e possui uma altura de ${listPatientsHeight[index]}.
    IMC do paciente é: ${listImc[index]}
    Classificação: ${interpretationImc(listImc[index])}
  `)
}

// functions IMC logic
// recebe como parametro peso e altura
function calculateImc(weight, height) {
  imc = weight / (height / 100) ** 2 // calculo IMC com conversão para metros da altura do paciente
  return imc.toFixed(2)
}

function interpretationImc(imc) {
  //Classificacao IMC
  let skinny,
    normal,
    overweight,
    obesity,
    severeObesity = false

  skinny = imc < 18.5 //magreza
  normal = imc >= 18.5 && imc <= 24.9 //normal
  overweight = imc >= 25 && imc <= 29.9 //sobrepeso
  obesity = imc >= 30 && imc <= 39.9 //obesidade
  severeObesity = imc > 40 // obesidade grave

  switch (true) {
    case skinny:
      return "MAGREZA"
      break
    case normal:
      return "NORMAL"
      break
    case overweight:
      return "SOBREPESO"
      break
    case obesity:
      return "OBESIDADE"
      break
    case severeObesity:
      return "OBESIDADE GRAVE"
    default:
      return "NULL"
      break
  }
}

