/**
 * classe abstrata que contém os atributos e métodos básicos
 * que toda classe que estende dela deve implementar
 */
export default abstract class AnaliseNumerica {
    protected listaNumerica: Array<number | any>;

    protected abstract validaLista(): boolean;
    abstract calculaValorMaximo(): number | string;
    abstract calculaValorMinimo(): number | string;
    abstract calculaValorMedio(): number | string;
    abstract realizaAnaliseCompleta(): Array<number> | string;
}