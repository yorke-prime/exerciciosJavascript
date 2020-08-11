'use-strict'
//Exercicio1 => Trocar o valor de duas variáveis

const a = 'bala';
const b = 'doce';

const x = 5;
const y = 8;
const z = 10;

function trocar(a, b) {
    const newN = a;
    a = b;
    b = newN;
    return b +', '+a;
}

//Exercicio2 => O dobro de um número qualquer

function dobro(a) {
    return a * 2;
}

//Exercicio3 => Área quadrada(retorna a area do quadrado)

function areaQuadrado(a, b) {
    return a * b;
}

//Exercicio4 => Antecessor e sucessor de um número qualquer

function anteSucessor(a) {
    const result = `Antecessor: ${a - 1}, Sucessor: ${a + 1} `;
    return result; 
}

//Exercicio5 => Média simples de 3 números
function media(a, b, c) {
    return ((a + b + c) / 3).toFixed(1);
}

//Exercicio6 => Descobrir os dias de 'n' meses
function totalDias(a) {
    return a * 30 + ' dias';
}


console.log('Exercicio1: ' + trocar(a, b));
console.log('Exercicio2: ' + dobro(x));
console.log('Exercicio3: ' + areaQuadrado(x, y));
console.log('Exercicio4: ' + anteSucessor(x));
console.log('Exercicio5: ' + media(x, y, z));
console.log('Exercicio6: ' + totalDias(x));