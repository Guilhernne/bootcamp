let nivel = ""
let saldoVitorias = 0
calcularNivel(127, 55)

function calcularNivel(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas

    if (saldoVitorias <= 10){
        nivel = "Ferro"
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze"
    } else if (saldoVitorias <= 50){
        nivel = "Prata"
    } else if (saldoVitorias <= 80){
        nivel = "Ouro"
    } else if (saldoVitorias <= 90){
        nivel = "Diamante"
    } else if (saldoVitorias <= 100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
}


console.log("O herói tem saldo de " + saldoVitorias + " está  no nível de " + nivel)


