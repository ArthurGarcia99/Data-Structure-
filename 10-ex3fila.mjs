import Queue from "./lib/Queue.mjs";

let filaAeroporto = new Queue()

filaAeroporto.enqueue("A")
filaAeroporto.enqueue("B")
filaAeroporto.enqueue("C")
filaAeroporto.enqueue("D")
filaAeroporto.enqueue("E")

console.log("Fila antes do início do embarque:")
console.log(filaAeroporto.print())
console.log()

console.log("Passageiro " + filaAeroporto.dequeue() + " foi chamado para embarque.")
console.log()

console.log("Fila após primeiro embarque:")
console.log(filaAeroporto.print())
console.log()

filaAeroporto.enqueue("F")
filaAeroporto.enqueue("G")
filaAeroporto.enqueue("H")

console.log("Fila após chegada de 3 passageiros:")
console.log(filaAeroporto.print())
console.log()

console.log("Proximo passageiro a embarcar: " + filaAeroporto.peek())
console.log("Passageiro " + filaAeroporto.dequeue() + " foi chamado.")
console.log()

console.log("Fila após segundo embarque:")
console.log(filaAeroporto.print())
