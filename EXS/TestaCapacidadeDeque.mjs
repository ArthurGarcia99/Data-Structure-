import Deque from "./Deque.mjs";

let daque = new Deque(5)

daque.insertFront(5)
daque.insertFront(4)
daque.insertFront(2)
daque.insertBack(9)
daque.insertBack(8)

console.log(daque.peekFront())
console.log(daque.peekBack())
console.log(daque.print())

daque.insertBack(6)
daque.insertFront(12)