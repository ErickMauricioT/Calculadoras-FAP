function converterMoeda(): void {
  const cotacaoInput = document.getElementById('cotacao') as HTMLInputElement;
  const valorRealInput = document.getElementById(
    'valorReal',
  ) as HTMLInputElement;
  const opcaoSelect = document.getElementById('opcao') as HTMLSelectElement;
  const resultadoElement = document.getElementById(
    'resultado',
  ) as HTMLParagraphElement;

  const cotacaoDolar: number = Number(cotacaoInput.value);
  const valorEmReal: number = Number(valorRealInput.value);
  const opcao: number = Number(opcaoSelect.value);

  let valorConvertido: number;

  if (opcao === 1) {
    valorConvertido = valorEmReal / cotacaoDolar;
    resultadoElement.textContent = `O valor convertido é: ${valorConvertido.toFixed(
      2,
    )} dólares.`;
  } else if (opcao === 2) {
    valorConvertido = valorEmReal * cotacaoDolar;
    resultadoElement.textContent = `O valor convertido é: ${valorConvertido.toFixed(
      2,
    )} reais.`;
  } else {
    resultadoElement.textContent = 'Opção inválida!';
  }
}
