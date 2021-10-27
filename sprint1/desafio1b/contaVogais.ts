/*
    função que retorna o número de vogais em uma palavra
    argumento requerido do tipo string
*/
function contaVogais(palavra: string) {
    //fazendo uso do regex [aeiou]. "g" para percorrer toda a string
    //"i" para identificar tanto vogal  maiúscula quanto minúscula
    var total = palavra.match(/[aeiou]/gi);
    //caso não houver vogal na palavra, total será null
    //verifica e retorna a resposta adequada total = 0
    return total === null ? 0 : total.length;
}