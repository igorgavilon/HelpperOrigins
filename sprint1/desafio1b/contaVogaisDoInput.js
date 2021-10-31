"use strict";
/**
 * função que conta o número de vogais em uma palavra
    e apresenta o resultado em um alerta na tela
 */
function contaVogaisDoInput() {
    //fazendo uso do regex [aeiou]. "g" para percorrer toda a string
    //"i" para identificar tanto vogal  maiúscula quanto minúscula
    //caso não houver vogal na palavra, total será null
    //verifica e retorna a resposta adequada total = 0
    var palavra = document.getElementById('palavra').value;
    alert("N\u00FAmero de vogais na palavra " + palavra + " \u00E9: " + (palavra.match(/[aeiou]/gi) || []).length);
}
/**
 * função que limpa as dados contidos no input selecionado
 */
function limpaInput() {
    document.getElementById('palavra').value = '';
}
