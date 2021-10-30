/*
    função que conta o número de vogais em uma palavra
    e apresenta o resultado em um alerta na tela
*/
function contaVogaisDoInput(): void {
    //fazendo uso do regex [aeiou]. "g" para percorrer toda a string
    //"i" para identificar tanto vogal  maiúscula quanto minúscula
    //caso não houver vogal na palavra, total será null
    //verifica e retorna a resposta adequada total = 0
    const palavra: string = document.getElementById('palavra').value;
    alert(`Número de vogais na palavra ${palavra} é: ` + (palavra.match(/[aeiou]/gi) || []).length);
}

function limpaInput(): void {
    document.getElementById('palavra').value = '';
}