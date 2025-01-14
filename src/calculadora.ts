// Variável que armazena o valor atual do visor da calculadora
let valorVisor: string = '';

function adicionarNumero(numero: string): void {
  valorVisor += numero; // Adiciona o número ao valor atual do visor
  const visor = document.getElementById('visor') as HTMLInputElement; // Obtém o campo do visor
  visor.value = valorVisor; // Atualiza o visor com o novo valor
}

function adicionarOperador(operador: string): void {
  valorVisor += operador; // Adiciona o operador ao valor atual do visor
  const visor = document.getElementById('visor') as HTMLInputElement; // Obtém o campo do visor
  visor.value = valorVisor; // Atualiza o visor com o novo valor
}

function calcular(): void {
  try {
    valorVisor = eval(valorVisor).toString(); // Avalia a expressão matemática e converte para string (string como operação em JSTS)
    const visor = document.getElementById('visor') as HTMLInputElement; // Obtém o campo do visor
    visor.value = valorVisor; // Exibe o resultado no visor
  } catch (e) {
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = 'Erro'; // Exibe "Erro" caso a expressão seja inválida
    valorVisor = ''; // Limpa o valorVisor
  }
}

// Função para calcular porcentagem
function calcularPorcentagem(): void {
  try {
    valorVisor = (parseFloat(valorVisor) / 100).toString(); // Converte o valor atual para porcentagem
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = valorVisor; // Atualiza o visor com o valor em porcentagem
  } catch (e) {
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = 'Erro'; // Exibe "Erro" caso ocorra algum problema
    valorVisor = ''; // Limpa o valorVisor
  }
}

// Função para apagar o último número ou operador digitado
function apagarUltimo(): void {
  valorVisor = valorVisor.slice(0, -1); // Remove o último caractere do valor armazenado
  const visor = document.getElementById('visor') as HTMLInputElement;
  visor.value = valorVisor; // Atualiza o visor com o novo valor
}

function limparVisor(): void {
  valorVisor = ''; // Limpa o valor armazenado
  const visor = document.getElementById('visor') as HTMLInputElement; // Obtém o campo do visor
  visor.value = ''; // Limpa o texto no visor
}
