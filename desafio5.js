/*
Capture 10 items para compor a lista de um supermercado.
Após capturar os 10 items, imprima-os, separando por vírgula.
*/
let item = []

for (let i = 0; i < 10; i++) {
  let itemList = prompt(`
  LISTA DE SUPERMERCADO COM 10 ITENS

  Digite o item número ${i + 1}:
  `)
  item[i] = itemList
}

alert(`
LISTA DE ITENS PARA COMPRA SUPERMERCADO:

1.  ${item[0]}
2.  ${item[1]}
3.  ${item[2]}
4.  ${item[3]}
5.  ${item[4]}
6.  ${item[5]}
7.  ${item[6]}
8.  ${item[7]}
9.  ${item[8]}
10. ${item[9]}
`)
