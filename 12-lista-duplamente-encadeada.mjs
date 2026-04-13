import DoubleLinkedlist from "./lib/DoubleLinkedList.mjs";

const lista = new DoubleLinkedlist()

console.log("Lista está vazia? ", lista.isEmpty ? "Está vazia" : "Não")
console.log(lista.print())

lista.insert(0, "Fiat 147")
console.log("Lista está vazia? ", lista.isEmpty ? "Está vazia" : "Não")
console.log(lista.print())

lista.insert(0, "Opala")
console.log(lista.print())

lista.insertTail("Chevette")
console.log(lista.print())

lista.insert(1, "Corcel")
console.log(lista.print())

let removido = lista.remove(0)
console.log({removido}, lista.print())

removido = lista.remove(1)
console.log({removido}, lista.print())

let pos0 = lista.peek(0)
let pos1 = lista.peek(1)
console.log({pos0, pos1})

let posChevette = lista.indexOf("Chevette")
console.log({posChevette})
