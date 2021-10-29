// 3 - Crie uma função que receba uma lista (valide se é númerica) e retorne outra contendo:
//   a) O maior valor;
//   b) O menor valor;
//   c) O valor médio.
//  Demonstre essa função com o paradigma funcional e imperativo

//função que retorna o máximo, o mínimo e a média dos valores de um Array numérico
//caso o array passado não seja numérico, retorna mensagem
function maxMinList(list: Array<any>): number[] | string {

    if(isArrayNumerico(list)) {
        let max, min, sum, media;
        max = min = sum = list[0];
        for(var i = 1; i < list.length; i++) {
            if(list[i] > max) {
                max = list[i];
            }
            if(list[i] < min) {
                min = list[i];
            }
            sum += list[i];
        }
        media = sum/list.length;
        return [max, min, media]
    }else {
        return 'O Array deve ser numérico!';
    }

    
}

//função que verifica se todos os elementos do Array é do tipo numérico
function isArrayNumerico(lista: Array<any>): boolean {
    for(let i = 0; i < lista.length; i++) {
        if (typeof(lista[i]) !== 'number') {
            return false;
        }
    }
    return true;
}

//teste das funções
const listaEntrada = [10, -2, 33, true, 4, 5, 6, 0];
//deve retornar a mensagem: O Array deve ser numérico!
console.log(maxMinList(listaEntrada));

const listaEntrada2 = [10, -2, 33, 4, 5, 6, 0];
//deve retornar o máximo, o mínimo e a média dos valores
console.log(maxMinList(listaEntrada2));