"use strict";
exports.__esModule = true;
exports.AnalisaPalavra = void 0;
/**
 * classe AnalisaPalavra
 * possui um étodo estático contaVogais
 * que retorna o número de vogais que a palavra analisada contém
 */
var AnalisaPalavra = /** @class */ (function () {
    function AnalisaPalavra() {
    }
    /**
     * função contaVogais
     * função estática (da Classe) que retorna o número de vogais de uma palavra
     * @param palavra string com a palavra que deseja analisar
     * @returns número de vogais que a palavra analisada contém
     */
    AnalisaPalavra.contaVogais = function (palavra) {
        //fazendo uso do regex [aeiou]. "g" para percorrer toda a string
        //"i" para identificar tanto vogal  maiúscula quanto minúscula
        //caso não houver vogal na palavra, total será null
        //verifica e retorna a resposta adequada total = 0
        return (palavra.match(/[aeiou]/gi) || []).length;
    };
    return AnalisaPalavra;
}());
exports.AnalisaPalavra = AnalisaPalavra;
