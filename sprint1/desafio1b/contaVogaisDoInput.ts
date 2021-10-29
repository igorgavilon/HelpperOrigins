/*
    função que retorna o número de vogais em uma palavra
    argumento requerido do tipo string
*/
function contaVogaisDoInput(): void {
    //fazendo uso do regex [aeiou]. "g" para percorrer toda a string
    //"i" para identificar tanto vogal  maiúscula quanto minúscula
    //caso não houver vogal na palavra, total será null
    //verifica e retorna a resposta adequada total = 0
    const palavra = document.getElementById('palavra').value;
    alert(`Número de vogais na palavra ${palavra} é: ` + (palavra.match(/[aeiou]/gi) || []).length);
}

function limpaInput(): void {
    document.getElementById('palavra').value = ''
}