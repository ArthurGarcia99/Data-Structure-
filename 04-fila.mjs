import Queue from "./lib/Queue.mjs";

let fila = new Queue()
console.log(fila.print())
console.log(fila.isEmpty)

//inserções na fila
fila.enqueue("Alexandre")
fila.enqueue("Arthur")
fila.enqueue("Jose")
fila.enqueue("Joaquim")

console.log(fila.print())

//quem sera atendido

let proximo = fila.peek()
console.log({ proximo }

)
//remoção da fila


let atendido = fila.dequeue()
console.log({ atendido })
console.log(fila.print())