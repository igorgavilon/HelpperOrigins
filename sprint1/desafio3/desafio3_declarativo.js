"use strict";
/**
 * função que compara dois valores e retorna o maior valor
 * @param a primeiro valor
 * @param b segundo valor
 * @returns maior valor
 */
var maxValue = function (a, b) { return Math.max(a, b); };
/**
 * função que compara dois valores e retorna o menor valor
 * @param a primeiro valor
 * @param b segundo valor
 * @returns menor valor
 */
var minValue = function (a, b) { return Math.min(a, b); };
/**
 * função que calcula a média de valores de um array
 * @param a é o valor do acumulador
 * @param b é o valor atual do array
 * @param index é o índice atual do array
 * @param listNumbers é o array que está sendo reduzido por reduced
 * @returns média do valores
 */
var sumValue = function (a, b, index, listNumbers) { return a + (b / listNumbers.length); };
/**
 * função que calcula o máximo, mínimo e a média de um valor numérico
 * @param list array de elementos numéricos ou não
 * @returns se o array for numérico, retorna [máximo, mínimo, média].
 *          se o array não é numérico, retorma mensagem 'O Array deve ser numérico!'
 */
function maxMinList(list) {
    if (list.every(function (element) { return typeof element == 'number'; })) {
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
//teste das funções
var listaEntrada_1 = [10, -2, 33, true, 4, 5, 6, 0];
//deve retornar a mensagem: O Array deve ser numérico!
console.log(maxMinList(listaEntrada_1));
var listaEntrada_2 = [10, -2, 33, 4, 5, 6, 0];
//deve retornar o máximo, o mínimo e a média dos valores
console.log(maxMinList(listaEntrada_2));
