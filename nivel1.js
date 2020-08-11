// Exercicio 1 => Funções para as 4 operações aritméticas adição, subtração, multiplicação e dividisão

const a = 'bala';
const b = 'doce';

const x = 10;
const y = 5;
const z = 15;

const adicao = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;

//Exercicio 2 => Custo de fabricação de um carro, Custo de fábrica = 10.000,00 Percentual do distribuidor = 28%Percentual dos Impostos  = 45%

function custo(cFabrica, percentualDistribuidor, percentualImpostos) {
    const distribuidor = (percentualDistribuidor * cFabrica) / 100;
    const impostos = (percentualImpostos * cFabrica) / 100;
    return cFabrica + distribuidor + impostos;
}

//Exercicio 3 => Juros simples, Vamos imaginar o seguinte cenário: um empréstimo de R$ 16.000,00 sobre a taxa de 4% durante 4 meses.
function juros(emprestimo, taxa, duracao) {
    const taxas = (taxa * emprestimo) / 100;
    return taxas * duracao;
}

//Exercicio 4 => Reajustando o salário(Faça um algoritmo que calcule o reajuste de um salário, utilize os seguintes dados: salário  = 1.000,00, reajuste = 15%
function Reajustar(salario, reajustavel) {
    const almento = (reajustavel * salario) / 100;
    return almento;
}
 

console.log(`Exercicio 1: Adição:  ${adicao(x, y)}, Subtração: ${subtracao(x, y)}, Multiplicação: ${multiplicacao(x, y)}, Divisão: ${divisao(x, y)}`);
console.log(`Exercicio 2: custo total: R$ ${custo(10000, 28, 45)}`);
console.log(`Exercicio 3: Juros Simples: R$ ${juros(16000, 4, 4)}`);
console.log(`Exercicio 4: Reajuste de salario: R$ ${Reajustar(1000, 15)}`);


