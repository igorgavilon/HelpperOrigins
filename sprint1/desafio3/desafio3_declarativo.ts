/**
 * função que compara dois valores e retorna o maior valor
 * @param a primeiro valor
 * @param b segundo valor
 * @returns maior valor
 */
const maxValue = (a: number, b: number) => Math.max(a, b);

/**
 * função que compara dois valores e retorna o menor valor
 * @param a primeiro valor
 * @param b segundo valor
 * @returns menor valor
 */
const minValue = (a: number, b: number) => Math.min(a, b);

/**
 * função que calcula a média de valores de um array
 * @param a é o valor do acumulador
 * @param b é o valor atual do array
 * @param index é o índice atual do array
 * @param listNumbers é o array que está sendo reduzido por reduced
 * @returns média do valores
 */
const sumValue = (a: number, b: number, index: number, listNumbers: number[]) => a + (b/listNumbers.length);

/**
 * função que calcula o máximo, mínimo e a média de um valor numérico
 * @param list array de elementos numéricos ou não
 * @returns se o array for numérico, retorna [máximo, mínimo, média].
 *          se o array não é numérico, retorma mensagem 'O Array deve ser numérico!'
 */
function maxMinList(list: Array<number | any>): number[] | string {
    if(list.every((element: any) => typeof element == 'number')) {
        //retorna o valor máximo do array
        let max: number = list.reduce(maxValue);
        //retorna o valor mínimo do array
        let min: number = list.reduce(minValue);
        //retorna a média dos valores do array
        let media: number = list.reduce(sumValue, 0);
        return [max, min, media]; 
    }else {
        return 'O Array deve ser numérico!';
    } 
}

//teste das funções
const listaEntrada_1 = [10, -2, 33, true, 4, 5, 6, 0];
//deve retornar a mensagem: O Array deve ser numérico!
console.log(maxMinList(listaEntrada_1));

const listaEntrada_2 = [10, -2, 33, 4, 5, 6, 0];
//deve retornar o máximo, o mínimo e a média dos valores
console.log(maxMinList(listaEntrada_2));