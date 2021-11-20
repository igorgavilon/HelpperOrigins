import ICientista from "./ICientista";
import {EnumPropriedadesCientista} from "./Tipos";

//define os métodos que devem ser implementados pelas classes
export default interface InfoCientistas {
    mostraBioPeloId(id: number): string;
    mostraNomePeloId(id: number): string;
    deletaCientistaPeloId(id: number): void | Array<ICientista>;
    alteraPropriedadePeloId(id: number, propriedade: EnumPropriedadesCientista, novoValor: string): string | Array<ICientista>;
}