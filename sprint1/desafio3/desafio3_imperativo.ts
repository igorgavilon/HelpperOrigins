/**
 * função que calcula o máximo, mínimo e a média de um valor numérico
 * @param list array de elementos numéricos ou não
 * @returns se o array for numérico, retorna [máximo, mínimo, média].
 *          se o array não é numérico, retorma mensagem 'O Array deve ser numérico!'
 */
function maxMinList(list: Array<number | any>): number[] | string {
    if(list.length != 0 && isArrayNumeric(list)) {
        let max, min, sum, mean: number;
        max = min = sum = list[0];
        for(let index = 1; index < list.length; index++) {
            if(list[index] > max) {
                max = list[index];
            }
            if(list[index] < min) {
                min = list[index];
            }
            sum += list[index];
        }
        mean = sum/list.length;
        return [max, min, mean]
    }else {
        return 'O Array deve ser numérico!';
    }  
}

/**
 * função que verifica se todos os elementos do Array são do tipo numérico
 * @param list array de elementos numéricos ou não
 * @returns true ou false, se o array for numérico ou não, respectivamente
 */
function isArrayNumeric(list: Array<number | any>): boolean {
    for(let index = 0; index < list.length; index++) {
        if (typeof(list[index]) !== 'number') {
            return false;
        }
    }
    return true;
}

//teste das funções
const listEntry1 = [10, -2, 33, true, 4, 5, 6, 0];
//deve retornar a mensagem: O Array deve ser numérico!
console.log(maxMinList(listEntry1));

const listEntry2 = [10, -2, 33, 4, 5, 6, 0];
//deve retornar o máximo, o mínimo e a média dos valores
console.log(maxMinList(listEntry2));

//deve retornar a mensagem: O Array deve ser numérico!
console.log(maxMinList([]));