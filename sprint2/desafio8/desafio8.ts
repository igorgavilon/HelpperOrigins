import Cientista from "./Cientista";
import CientistaFactory from "./CientistaFactory";

/**
* declaração do array de Objetos do tipo Cientista
*/
const arrayCientistas: Array<Cientista> = [
    {id : 1, name: "Ada Lovelace", 
        bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", 
        bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", 
        bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", 
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
 ];

//enviando todos os objetos do arrayCientistas para a Factory
for(let cientista of arrayCientistas) {
    //é instanciada a classe CientistaFactory passando como parâmetro um objeto do tipo Cientista
    //será retornado uma instância de uma das classes: Cientista ou CientistaDestaque
    //conforme verificação feita pela Factory
    let instanciaGeradaPelaFactory: Cientista = CientistaFactory.criaNovoCientista(cientista);
    //chama o método toString para mostrar nome, bio e atributo destaque, caso houver
    instanciaGeradaPelaFactory.toString();
}

