"use strict";
const botao = document.getElementById("btn");
botao.addEventListener("click", () => {
    const entradaAlcool = document.getElementById("alcool");
    const entradaGasolina = document.getElementById("gasolina");
    const alcool = parseFloat(entradaAlcool.value);
    const gasolina = parseFloat(entradaGasolina.value);
    if (isNaN(alcool) || isNaN(gasolina) || alcool <= 0 || gasolina <= 0) {
        alert("Por favor, insira valores numéricos válidos maiores que zero.");
        return;
    }
    let resultado;
    const razao = alcool / gasolina;
    if (razao <= 0.7) {
        resultado = "Abasteça com álcool";
        alert("Abasteça com álcool");
    }
    else {
        resultado = "Abasteça com gasolina";
        alert("Abasteça com gasolina");
    }
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = resultado;
});
