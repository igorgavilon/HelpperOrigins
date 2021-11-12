/**
 * classe AnalisaPalavra
 * possui um método estático contaVogais
 * que retorna o número de vogais que a palavra analisada contém
 */
 class AnalisaPalavra {
     
    /**
     * função contaVogais
     * função estática (da Classe) que retorna o número de vogais de uma palavra
     * @param palavra string com a palavra que deseja analisar
     * @returns número de vogais que a palavra analisada contém
     */
    public static contaVogais(palavra: string): number {
        //fazendo uso do regex [aeiouáàãâäéèêëíìîïóòõôöúùûü]. "g" para percorrer toda a string
        //"i" para identificar tanto vogal  maiúscula quanto minúscula
        //considerarando também vogais acentuadas
        //caso não houver vogal na palavra, total será null
        //verifica e retorna a resposta adequada total = 0
        return (palavra.match(/[aeiouáàãâäéèêëíìîïóòõôöúùûü]/gi) || []).length;
    }
}

/**
 * função que conta o número de vogais em uma palavra
    e apresenta o resultado em um alerta na tela
 */
function contaVogaisDoInput(): void {
    //pega o texto que está no input text HTML de id="palavra"
    const palavra: string = document.getElementById('palavra').value;
    //chamada da função estática contaPalavras da classe AnalisaPalavra
    const numeroVogais: number = AnalisaPalavra.contaVogais(palavra);
    alert(`Número de vogais na palavra ${palavra} é: ${numeroVogais}`);
}

/**
 * função que limpa as dados contidos no input selecionado
 */
function limpaInput(): void {
    document.getElementById('palavra').value = '';
}