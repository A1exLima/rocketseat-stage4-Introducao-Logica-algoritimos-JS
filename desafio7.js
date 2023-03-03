/*
Faça um programa que tenha um menu e apresente a seguinte mensagem:

Olá usuário! Digite a opção desejada

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa.

O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados

Se não houver nenhum item cadastrado, mostrar a mensagem:
”Não existem itens cadastrados"

Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/

let itemList = []
loop = true

while (loop) {
  let optionMenu = Number(prompt(`
    Olá usuário! Digite a opção desejada
    
    1. Cadastrar item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `))

  switch (optionMenu) {
    case 1:
      registerItems()
      break
    case 2:
      listItens()
      break
    case 3:
      loop = false
      break
    default:
      alert(`Opção não implementada`)
      break
  }
}

function registerItems() {
  let item = prompt(`Digite o item da lista:`)

  itemList.push(item) // .push Inseri no final do array a variavel recebida como argumento
  return itemList
}

function listItens() {
  if (itemList.length == 0) {  //.length verifica o comprimento do array, ou seja se o itemList for igual a 0, isso indica que nao tem nenhum item cadastrado.
    alert(`Não existem itens cadastrados`)
  } else {
    alert(`
      Lista de itens cadastrados:

      ${itemList}
    `)
  }
}
