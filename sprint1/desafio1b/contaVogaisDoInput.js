"use strict";
/*
    função que retorna o número de vogais em uma palavra
    argumento requerido do tipo string
*/
function contaVogaisDoInput() {
    //fazendo uso do regex [aeiou]. "g" para percorrer toda a string
    //"i" para identificar tanto vogal  maiúscula quanto minúscula
    //caso não houver vogal na palavra, total será null
    //verifica e retorna a resposta adequada total = 0
    var palavra = document.getElementById('palavra').value;
    alert("N\u00FAmero de vogais na palavra " + palavra + " \u00E9: " + (palavra.match(/[aeiou]/gi) || []).length);
}
function limpaInput() {
    document.getElementById('palavra').value = '';
}
