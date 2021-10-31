"use strict";
/**
 * função que calcula o máximo, mínimo e a média de um valor numérico
 * @param list array de elementos numéricos ou não
 * @returns se o array for numérico, retorna [máximo, mínimo, média].
 *          se o array não é numérico, retorma mensagem 'O Array deve ser numérico!'
 */
function maxMinList(list) {
    if (isArrayNumerico(list)) {
        var max = void 0, min = void 0, sum = void 0, media = void 0;
        max = min = sum = list[0];
        for (var i = 1; i < list.length; i++) {
            if (list[i] > max) {
                max = list[i];
            }
            if (list[i] < min) {
                min = list[i];
            }
            sum += list[i];
        }
        media = sum / list.length;
        return [max, min, media];
    }
    else {
        return 'O Array deve ser numérico!';
    }
}
/**
 * função que verifica se todos os elementos do Array são do tipo numérico
 * @param lista array de elementos numéricos ou não
 * @returns true ou false, se o array for numérico ou não, respectivamente
 */
function isArrayNumerico(lista) {
    for (var i = 0; i < lista.length; i++) {
        if (typeof (lista[i]) !== 'number') {
            return false;
        }
    }
    return true;
}
//teste das funções
var listaEntrada = [10, -2, 33, true, 4, 5, 6, 0];
//deve retornar a mensagem: O Array deve ser numérico!
console.log(maxMinList(listaEntrada));
var listaEntrada2 = [10, -2, 33, 4, 5, 6, 0];
//deve retornar o máximo, o mínimo e a média dos valores
console.log(maxMinList(listaEntrada2));
