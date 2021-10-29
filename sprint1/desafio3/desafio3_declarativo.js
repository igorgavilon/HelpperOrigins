"use strict";
//função que retorna sempre o maior valor entre o valor atual e o anterior do array
var maxValue = function (a, b) { return Math.max(a, b); };
//função que retorna sempre o menor valor entre o valor atual e o anterior do array
var minValue = function (a, b) { return Math.min(a, b); };
//função que calcula a média de valores de um array
//'a' é o valor do acumulador
//'b' é o valor atual do array
//'listaNumbers' é o array que está sendo reduzido por reduced.
//para calcular a média basta dividir cada item do array pelo tamanho do array e depois somar todos os valoresß
var sumValue = function (a, b, index, listNumbers) { return a + (b / listNumbers.length); };
//função que verifica se um elemento é do tipo number
var isNum = function (element) { return typeof (element) == 'number'; };
//função que retorna o máximo, o mínimo e a média dos valores de um Array numérico
//caso o array passado não seja numérico, retorna mensagem
function maxMinList(list) {
    if (isArrayNumerico(list)) {
        //retorna o valor máximo do array
        var max = list.reduce(maxValue);
        //retorna o valor mínimo do array
        var min = list.reduce(minValue);
        //retorna a média dos valores do array
        var media = list.reduce(sumValue, 0);
        return [max, min, media];
    }
    else {
        return 'O Array deve ser numérico!';
    }
}
//função auxiliar: verifica o tipo de dado
//será utilizado na função reduce
//´a´inicia com true, caso algum dado seja de tipo diferente de number
//a função retornará false por causa da lógica AND (&&)
var typeNum = function (a, b) { return a && (typeof b == 'number'); };
//função que verifica se todos os elementos do Array é do tipo numérico
function isArrayNumerico(lista) {
    //caso algum dado da lista seja de tipo diferente de number, retorna false
    return lista.reduce(typeNum, true);
}
//teste das funções
var listaEntrada_1 = [10, -2, 33, true, 4, 5, 6, 0];
//deve retornar a mensagem: O Array deve ser numérico!
console.log(maxMinList(listaEntrada_1));
var listaEntrada_2 = [10, -2, 33, 4, 5, 6, 0];
//deve retornar o máximo, o mínimo e a média dos valores
console.log(maxMinList(listaEntrada_2));
