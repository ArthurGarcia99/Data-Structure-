import Stack from "./lib/Stack.mjs";

let torreA = new Stack()
let torreB = new Stack()
let torreC = new Stack()

console.log("Três torres vazias:")
console.log(torreA.print())
console.log(torreB.print())
console.log(torreC.print())
console.log()

torreB.Inserir(1)
torreB.Inserir(2)
torreB.Inserir(3)
torreB.Inserir(4)
console.log("Torre B Preenchida.")
console.log(torreA.print())
console.log(torreB.print())
console.log(torreC.print())
console.log()


torreB.remover()
torreC.Inserir(4)

torreB.remover()
torreA.Inserir(3)

torreC.remover()
torreA.Inserir(4)

torreB.remover()
torreC.Inserir(2)

torreA.remover()
torreB.Inserir(4)

torreA.remover()
torreC.Inserir(3)

torreB.remover()
torreC.Inserir(4)

torreB.remover()
torreA.Inserir(1)

torreC.remover()
torreA.Inserir(4)

torreC.remover()
torreB.Inserir(3)

torreA.remover()
torreB.Inserir(4)

torreC.remover()
torreA.Inserir(2)

torreB.remover()
torreC.Inserir(4)

torreB.remover()
torreA.Inserir(3)

torreC.remover()
torreA.Inserir(4)

console.log("Torre A Preenchida após o passo a passo.")
console.log(torreA.print())
console.log(torreB.print())
console.log(torreC.print())