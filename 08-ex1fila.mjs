import Queue from './lib/Queue.mjs';

let filaBanco = new Queue()

filaBanco.enqueue(101)
filaBanco.enqueue(102)
filaBanco.enqueue(103)
filaBanco.enqueue(104)
filaBanco.enqueue(105)

console.log("Fila antes do atendimento:")
console.log(filaBanco.print())
console.log()

console.log("Cliente " + filaBanco.dequeue() + " foi atendido.")
console.log()

console.log("Fila após o primeiro atendimento:")
console.log(filaBanco.print())
console.log()

filaBanco.enqueue(106)
filaBanco.enqueue(107)

console.log("Fila após chegada de 2 clientes:")
console.log(filaBanco.print())
console.log()

console.log("Qual é o próximo cliente a ser atendido? " + filaBanco.peek())
console.log()

console.log("Cliente " + filaBanco.dequeue() + " foi atendido.")
console.log()

console.log("Fila após o segundo atendimento:")
console.log(filaBanco.print())