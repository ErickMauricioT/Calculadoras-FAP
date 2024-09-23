"use strict";

// Variável que armazena o valor atual do visor da calculadora
let valorVisor = '';

// Função para adicionar número ao visor
function adicionarNumero(numero) {
    valorVisor += numero; // Adiciona o número ao valor atual do visor
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = valorVisor; // Atualiza o visor com o novo valor
}

// Função para adicionar operador ao visor
function adicionarOperador(operador) {
    valorVisor += operador; // Adiciona o operador ao valor atual do visor
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = valorVisor; // Atualiza o visor com o novo valor
}


// Função para calcular a porcentagem
function calcularPorcentagem() {
    try {
        // Se o visor já contém uma expressão, divide o resultado da expressão por 100
        if (valorVisor.includes('+') || valorVisor.includes('-') || valorVisor.includes('*') || valorVisor.includes('/') ) {
            valorVisor = eval(valorVisor).toString();
        }
        valorVisor = (parseFloat(valorVisor) / 100).toString(); // Converte o valor para porcentagem
        const visor = document.getElementById('visor'); // Obtém o campo do visor
        visor.value = valorVisor; // Exibe o resultado no visor
    } catch (e) {
        const visor = document.getElementById('visor'); // Obtém o campo do visor
        visor.value = 'Erro'; // Exibe "Erro" caso a expressão seja inválida
        valorVisor = ''; // Limpa o valorVisor
    }
}


// Função para calcular a expressão matemática
function calcular() {
    try {
        valorVisor = eval(valorVisor).toString(); // Avalia a expressão matemática e converte para string
        const visor = document.getElementById('visor'); // Obtém o campo do visor
        visor.value = valorVisor; // Exibe o resultado no visor
    } catch (e) {
        const visor = document.getElementById('visor'); // Obtém o campo do visor
        visor.value = 'Erro'; // Exibe "Erro" caso a expressão seja inválida
        valorVisor = ''; // Limpa o valorVisor
    }
}


// Função para apagar o último caractere
function apagarUltimo() {
    valorVisor = valorVisor.slice(0, -1); // Remove o último caractere do valor do visor
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = valorVisor; // Atualiza o visor com o novo valor
}

// Função para limpar o visor
function limparVisor() {
    valorVisor = ''; // Limpa o valor armazenado
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = ''; // Limpa o texto no visor
}
