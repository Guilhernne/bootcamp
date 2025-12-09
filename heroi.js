class heroi {
  constructor(name, age, tipo){
    this.name = name
    this.age = age
    this.tipo = tipo
    this.ataque = ""
  }
  atacar() {
    let ataque

    if (this.tipo === "Guerreiro") {
      ataque = "espada"
    } else if (this.tipo === "Mago") {
      ataque = "magia"
    } else if (this.tipo === "Monge") {
      ataque = "artes marciais"
    } else if (this.tipo === "Ninja") {
      ataque = "shuriken"
    } else {
      ataque = "um ataque desconhecido"
    }
    console.log(`O ${this.tipo} ${this.name} atacou usando ${ataque}!`)
  }

  preparando(){
    let ataque
    if (this.tipo === "Bruxa"){
      ataque = "feitiço"
    }
    console.log(`A ${this.tipo} ${this.name} está preparando o seu ${ataque}`)
  }
}

let heroi1 = new heroi("Guilherme", 32, "Guerreiro")
let heroi2 = new heroi("Heitor", 7, "Mago")
let heroi3 = new heroi("Isis", 4, "Bruxa")

heroi1.atacar()
heroi2.atacar()

heroi3.preparando()