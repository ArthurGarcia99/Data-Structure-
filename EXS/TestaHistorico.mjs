import Stack from "./Stack.mjs";

let pilha = new Stack()

pilha.push("Google")
pilha.push("Youtube")
pilha.push("Instagram")
pilha.push("Facebook")
pilha.pop()

console.log(pilha.peek())
console.log(pilha.print())
console.log(pilha.history())