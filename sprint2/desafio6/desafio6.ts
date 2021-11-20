import CientistaFuncional from "./CientistaFuncional";
import CientistaImperativo from "./CientistaImperativo"
import ICientista from "./ICientista";
import { EnumPropriedadesCientista } from "./Tipos";

/**
* declaração do array de Objetos do tipo Cientista
*/
const arrayCientistas: Array<ICientista> = [
    {id : 1, name: "Ada Lovelace", 
        bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", 
        bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", 
        bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", 
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
 ];

//instanciando um objeto da classe CientistaFuncional
let exemploFuncional: CientistaFuncional = new CientistaFuncional(arrayCientistas);
//busca um nome pelo id
let nome: string = exemploFuncional.mostraNomePeloId(1);
console.log(nome);
//busca um nome de um id que não existe
//mensagem esperada: Nenhum id encontrado.
nome = exemploFuncional.mostraNomePeloId(10);
console.log(nome);
//remove um item do array
let listaComItemRemovido: Array<ICientista> = exemploFuncional.deletaCientistaPeloId(2) as Array<ICientista>;
console.log(listaComItemRemovido);
//altera a propriedade name de um objeto
let listaComItemAlterado: Array<ICientista> =exemploFuncional.alteraPropriedadePeloId(3, EnumPropriedadesCientista.BIO, "Aluno Bootcamp Helppers.") as Array<ICientista>;
console.log(listaComItemAlterado);

 //instanciando um objeto da classe CientistaImperativo
let exemploImperativo: CientistaImperativo = new CientistaImperativo(arrayCientistas);
//busca um nome pelo id
nome = exemploImperativo.mostraNomePeloId(1);
console.log(nome);
//busca um nome de um id que não existe
//mensagem esperada: Nenhum id encontrado.
nome = exemploImperativo.mostraNomePeloId(10);
console.log(nome);
//altera a propriedade name de um objeto
let resposta: string = exemploImperativo.alteraPropriedadePeloId(3, EnumPropriedadesCientista.NOME, "Igor Gavilon");
console.log(resposta);
//verifica se alterou a propriedade
nome = exemploImperativo.mostraNomePeloId(3);
console.log(nome);
