import LinkedList from "./lib/LinkedList.mjs";

const lista = new LinkedList()

console.log("A lista está vazia?", lista.isEmpty ? "\nSim, está vazia" : "Não")

lista.insert(0, "Fusca")
lista.insert(0, "Corcel")

console.log(lista.print())

lista.insert(2, "Opala")
lista.insert(3, "Chevette")
lista.insert(4, "Maverick")
console.log(lista.print())

lista.insert(3, "Brasília")
console.log(lista.print())

lista.insertHead("Belina")
lista.insertTail("Gol")

console.log(lista.print())

let removido = lista.remove(0)
console.log({removido})
console.log(lista.print())

removido = lista.remove(4)
console.log({removido})
console.log(lista.print())

let idxFusca = lista.indexOf("Fusca")
let idxOpala = lista.indexOf("Opala")
let idxGol = lista.indexOf("Gol")
let idxNE = lista.indexOf("NE")

console.log({idxFusca, idxGol,idxOpala, idxNE})

let pos0 = lista.peek(0)
let pos1 = lista.peek(1)
let pos4 = lista.peek(4)

console.log({pos0, pos1, pos4})