/**
 * classe AnalisaPalavra
 * possui um étodo estático contaVogais
 * que retorna o número de vogais que a palavra analisada contém
 */
 export class AnalisaPalavra {
     
    /**
     * função contaVogais
     * função estática (da Classe) que retorna o número de vogais de uma palavra
     * @param palavra string com a palavra que deseja analisar
     * @returns número de vogais que a palavra analisada contém
     */
    static contaVogais(palavra: string): number {
        //fazendo uso do regex [aeiou]. "g" para percorrer toda a string
        //"i" para identificar tanto vogal  maiúscula quanto minúscula
        //caso não houver vogal na palavra, total será null
        //verifica e retorna a resposta adequada total = 0
        return (palavra.match(/[aeiou]/gi) || []).length;
    }
}