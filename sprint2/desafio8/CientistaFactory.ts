import ICientista from "./ICientista";
import Cientista from "./Cientista";
import CientistaDestaque from "./CientistaDestaque"

/**
 * classe fábrica de instâncias da classe Cientista
 */
export default class CientistaFactory {
    //construtor recebe um array do tipo ICientista
    constructor(lista: Array<ICientista>) {
        //para cada item da lista é criada uma instância de uma determinada classe
        //e também é chamado o método toString() de cada instância
        for(let cientista of lista) {
            //verifica se a cientista em questão é a Ada Lovelace
            if(cientista.name.includes("Ada Lovelace")) {
                //caso seja, instancia a classe CientistaDestaque que possui um atributo destaque
                //será mostrado no console o valor do atributo de destaque
                new CientistaDestaque(cientista.id, cientista.name, cientista.bio).toString();
            }else {
                //caso não seja, instancia uma classe Cientista, sem o atributo de destaque
                new Cientista(cientista.id, cientista.name, cientista.bio).toString();
            }
            
        }
    }
}