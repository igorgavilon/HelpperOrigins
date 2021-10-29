/*
    função que retorna o número de vogais em uma palavra
    argumento requerido do tipo string
*/
function contaVogais(palavra: string): number {
    //fazendo uso do regex [aeiou]. "g" para percorrer toda a string
    //"i" para identificar tanto vogal  maiúscula quanto minúscula
    //caso não houver vogal na palavra, total será null
    //verifica e retorna a resposta adequada total = 0
    return (palavra.match(/[aeiou]/gi) || []).length;
}

//teste da função
const minhaPalavra = 'GavilOn';
const numeroDeVogais = contaVogais(minhaPalavra);
console.log(`O número de vogais na palavra ${minhaPalavra} é: ${numeroDeVogais}`);
