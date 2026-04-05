import LinkedList from "./LinkedList.mjs";

const lista = new LinkedList()

lista.insertTail(10)
lista.insertTail(20)
lista.insertTail(10)
lista.insertTail(30)
lista.insertTail(10)
lista.insertTail(40)


console.log(lista.print())

lista.removeAll(10)

console.log(lista.print())

console.log(lista.history())