import Queue from "./Queue.mjs";

let fila = new Queue()

fila.enqueue("Arthur")
fila.enqueue("Filipe")
fila.enqueue("Pedro")

console.log(fila.isEmpty)
console.log(fila.peek())
console.log(fila.print())

console.log(fila.operationCount)