import Deque from "./lib/Deque.mjs";

let listaCompras = new Deque()

console.log(listaCompras.print())
console.log("A lista está vazia?\n"+listaCompras.isEmpty)

//produtos Alimenticios -> Inicio
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")
listaCompras.insertFront("Sal")
console.log(listaCompras.print())

//produtos Higiene/Limpeza -> Final
listaCompras.insertBack("Sabão em pó")
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("Água Sanitária")
console.log(listaCompras.print())

listaCompras.insertFront("Café")
listaCompras.insertFront("Açúcar")
console.log(listaCompras.print())

listaCompras.insertBack("Amaciante")
listaCompras.insertBack("Shampoo")
listaCompras.insertBack("Condicionador")
console.log(listaCompras.print())

let removido = listaCompras.removeFront()
console.log({ removido })
console.log(listaCompras.print())

let frente = listaCompras.peekFront()
let ultimo = listaCompras.peekBack()
console.log({ frente })
console.log({ ultimo })
