import AnaliseNumericaFuncional from "./AnaliseNumericaFuncional";
import AnaliseNumericaImperativa from "./AnaliseNumericaImperativa";
import { EnumParadigmaProgramacao } from "./Tipos";

/**
 * classe que serve de fábrica para objetos do tipo AnaliseNumerica
 * e suas duas classes filhas AnaliseNumericaImperativa e AnaliseNumericaFuncional
 */
export default class AnaliseNumericaFactory {
    //o construtor irá verificar qual tipo de paradigma foi selecionado
    //então criará uma instância da classe apropriada, que implementa os métodos
    //da classe AnaliseNumerica aplicando um dos dois paradigmas
    constructor(lista: Array<number | any>, paradigma: EnumParadigmaProgramacao) {
        if(paradigma = EnumParadigmaProgramacao.IMPERATIVO) {
            return new AnaliseNumericaImperativa(lista);
        }
        if(paradigma = EnumParadigmaProgramacao.FUNCIONAL) {
            return new AnaliseNumericaFuncional(lista);
        } 
    }
}