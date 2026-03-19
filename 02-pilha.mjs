import Stack from "./lib/Stack.mjs";

let pilha = new Stack()
console.log(pilha.print())
console.log("Esta vazia? " + pilha.isEmpty)

pilha.Inserir(35)
pilha.Inserir(77)
pilha.Inserir(19)

console.log("\n" + pilha.print())
console.log("Esta vazia? " + pilha.isEmpty)

let removido = pilha.remover()
console.log("Removido: " + removido + " " + pilha.print())

let ultimo = pilha.peek()
console.log("Ultimo da lista: " + ultimo + " " + pilha.print())
