import LinkedList from "./LinkedList.mjs";

const lista = new LinkedList()

lista.insertHead("Arroz")
lista.insertTail("Feijão")
lista.insertHead("Cafe")
lista.insertHead("Suco")

console.log(lista.print())

lista.reverse()

console.log(lista.print())