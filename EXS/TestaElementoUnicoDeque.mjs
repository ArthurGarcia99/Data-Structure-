import Deque from "./Deque.mjs";

let daque = new Deque(5)

daque.insertFront(5)
daque.insertFront(4)
daque.insertBack(3)

console.log(daque.print())

// erro aqui
daque.insertBack(5)
