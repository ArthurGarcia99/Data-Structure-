import Stack from "./lib/Stack.mjs";

let pilha = new Stack()

console.log(pilha.print())

pilha.Inserir(5)
console.log(pilha.print())
pilha.Inserir(9)
console.log(pilha.print())

pilha.remover()
console.log(pilha.print())

pilha.Inserir(3)
console.log(pilha.print())
pilha.Inserir(8)
console.log(pilha.print())

pilha.remover()
console.log(pilha.print())
pilha.remover()
console.log(pilha.print())

pilha.Inserir(6)
console.log(pilha.print())

pilha.Inserir()
console.log(pilha.print())

pilha.Inserir(2)
console.log(pilha.print())

pilha.remover()
console.log(pilha.print())

pilha.Inserir(10)
console.log(pilha.print())
pilha.Inserir(1)
console.log(pilha.print())

pilha.remover()
console.log(pilha.print())
pilha.remover()
console.log(pilha.print())

pilha.Inserir(15)
console.log(pilha.print())

pilha.remover()
console.log(pilha.print())
pilha.remover()
console.log(pilha.print())