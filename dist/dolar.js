// 1 - Implementar um programa que, a partir da cotação do dólar e do valor em reais, calcula o valor equivalente em dólares

let cotacaoDolar = Number(prompt("Informe a cotação do dólar:"));

let valorEmReal = Number(prompt("Informe o valor em reais que você deseja converter:"));

let valorConvertido = valorEmReal / cotacaoDolar;


let opcao = Number(prompt
  ("Escolha a opção de conversão:\n1 - REAL -> DOLAR\n2 - Dolar -> REAL"))

if (opcao == 1) {
  alert(`O valor convertido é: ${valorConvertido.toFixed(2)} reais`)
} else if (opcao == 2) {
  alert(`O valor convertido é: ${valorConvertido.toFixed(2)} dólares`)
} else {
  alert("Opção inválida!")
}

alert(`O valor convertido é: ${valorConvertido.toFixed(2)} dólares`)