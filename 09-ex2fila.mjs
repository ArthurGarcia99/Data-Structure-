import Queue from "./lib/Queue.mjs";

let atendimento = new Queue()

atendimento.enqueue("José")
atendimento.enqueue("Sérgio")
atendimento.enqueue("Joaquim")
atendimento.enqueue("Maria")
atendimento.enqueue("João")
atendimento.enqueue("Samuel")
atendimento.enqueue("Vicente")
atendimento.enqueue("Terezinha")
atendimento.enqueue("Firmino")
atendimento.enqueue("Toninho")
atendimento.enqueue("Alexandre")

console.log("Fila antes do atendimento:")
console.log(atendimento.print())

console.log()
console.log("Paciente " + atendimento.dequeue() + " foi atendido.")
console.log()

console.log("Fila após o primeiro atendimento:")
console.log(atendimento.print())
console.log()

atendimento.enqueue("Rafael")
atendimento.enqueue("Isabela")
atendimento.enqueue("Cauã")

console.log("Fila após a chegada de 3 pessoas: ")
console.log(atendimento.print())
console.log()

console.log("Qual a próxima pessoa a ser atendida: " + atendimento.peek())
console.log()

console.log("Paciente " + atendimento.dequeue() + " foi atendido")
console.log()

console.log("Fila após o segundo atendimento:")
console.log(atendimento.print())
console.log()