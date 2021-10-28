"use strict";
// 3 - Crie uma função que receba uma lista (valide se é númerica) e retorne outra contendo:
//   a) O maior valor;
//   b) O menor valor;
//   c) O valor médio.
//  Demonstre essa função com o paradigma funcional e imperativo
var listaNumerica = [1, 2, 3, 4, 5, 6];
function maxMinList(list) {
    var max, min, sum, media;
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
console.log(maxMinList(listaNumerica));
