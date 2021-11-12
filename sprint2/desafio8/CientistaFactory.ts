import Cientista from "./Cientista";
import CientistaDestaque from "./CientistaDestaque"

/**
 * classe fábrica de instâncias da classe Cientista
 */
export default class CientistaFactory {
    //construtor recebe um array do tipo ICientista
    constructor(cientista: Cientista) {
        //verifica se a cientista em questão é a Ada Lovelace
        if(cientista.name.includes("Ada Lovelace")) {
            //caso seja, instancia a classe CientistaDestaque que possui um atributo destaque
            //será mostrado no console o valor do atributo de destaque
            return new CientistaDestaque(cientista.id, cientista.name, cientista.bio, "Esta cientista criou a linguagem de programação Ada.");
        }else {
            //caso não seja, instancia uma classe Cientista, sem o atributo de destaque
            return new Cientista(cientista.id, cientista.name, cientista.bio);
        }
    }
}