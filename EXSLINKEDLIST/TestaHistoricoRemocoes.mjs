import LinkedList from "./LinkedList.mjs";

const lista = new LinkedList()

lista.insertHead("Arroz")
lista.insertTail("Feijão")
lista.insertHead("Cafe")
lista.insertHead("Suco")

console.log(lista.print())
console.log(lista.history())

lista.removeHead()
lista.removeTail()

console.log(lista.print())

console.log(lista.history())