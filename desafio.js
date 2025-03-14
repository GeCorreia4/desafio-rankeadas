var numVitorias = 75;
var numDerrotas = 25;
var saldoVitorias = calcWins(numVitorias, numDerrotas)
var nivel = rankedSystem(saldoVitorias)

function calcWins(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas;
    return saldoVitorias
}

function rankedSystem (saldo) {
    if (saldo <= 10) {
        nivel = "Ferro";
    } else if (saldo > 10 && saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo > 20 && saldo <= 50) {
        nivel = "Prata";
    } else if (saldo > 50 && saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo > 80 && saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo > 90 && saldo <= 100) {
        nivel = "Lendário";
    } else if (saldo > 100) {
        nivel = "Imortal";
    }
    return nivel
}

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);