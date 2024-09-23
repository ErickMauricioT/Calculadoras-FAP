function converterMoeda() {
 const cotacaoDolar = Number(document.getElementById("cotacao").value);
 const valorEmReal = Number(document.getElementById("valorReal").value);
 const opcao = Number(document.getElementById("opcao").value);
 let valorConvertido;

 if (opcao === 1) {
  valorConvertido = valorEmReal / cotacaoDolar;
  document.getElementById("resultado").textContent = `O valor convertido é: ${valorConvertido.toFixed(2)} dólares.`;
 } else if (opcao === 2) {
  valorConvertido = valorEmReal * cotacaoDolar;
  document.getElementById("resultado").textContent = `O valor convertido é: ${valorConvertido.toFixed(2)} reais.`;
 } else {
  document.getElementById("resultado").textContent = "Opção inválida!";
 }
}
