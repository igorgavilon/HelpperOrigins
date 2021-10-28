//função que retorna sempre o maior valor entre o valor atual e o anterior do array
const maxValue = (a: number, b: number) => Math.max(a, b);
//função que retorna sempre o menor valor entre o valor atual e o anterior do array
const minValue = (a: number, b: number) => Math.min(a, b);
//função que calcula a média de valores de um array
//'a' é o valor do acumulador
//'b' é o valor atual do array
//'listaNumbers' é o array que está sendo reduzido por reduced.
//para calcular a média basta dividir cada item do array pelo tamanho do array e depois somar todos os valoresß
const sumValue = (a: number, b: number, index: number, listNumbers: number[]) => a + (b/listNumbers.length);

function maxMinList(list: Array<number>) {
    //retorna o valor máximo do array
    let max = list.reduce(maxValue);
    //retorna o valor mínimo do array
    let min = list.reduce(minValue);
    //retorna a média dos valores do array
    let media = list.reduce(sumValue, 0);
    return [max, min, media]; 
}

//teste da função
const listaNumerica2 = [10, -2, 33, 4, 5, 6, 0];
console.log(maxMinList(listaNumerica2));