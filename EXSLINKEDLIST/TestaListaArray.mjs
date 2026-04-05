import LinkedList from "./LinkedList.mjs";

const lista = new LinkedList()

lista.insertHead("Arroz")
lista.insertTail("Feijão")
lista.insertHead("Suco")
lista.insertHead("Suco")

console.log(lista.print())

console.log(lista.toArray())