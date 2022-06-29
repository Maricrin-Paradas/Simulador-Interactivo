class crochet {
  constructor(material, hilos, accesorios){
    this.material = material
    this.hilos = hilos
    this.accesorios = accesorios
  }
}

const tejido1 = new crochet ('2 rollo', 'lana', 'ganchillo')
const tejido2 = new crochet ('1 rollo', 'algodon', 'palillo')
const tejido3 = new crochet ('24 rollo', 'sintetico', 'ganchillo')

let misTejidos = []

misTejidos.push(tejido1, tejido2, tejido3)

console.table(misTejidos)

const tejido4 = ["2 rollo", "lana", "ganchillo"]

tejido4.reverse()

console.table(tejido4)

for(let producto of misTejidos){
  console.log(producto)
}