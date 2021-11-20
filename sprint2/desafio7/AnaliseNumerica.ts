/**
 * classe abstrata que contém os atributos e métodos básicos
 * que toda classe que estende dela deve implementar
 */
export default abstract class AnaliseNumerica {
    protected listaNumerica: Array<number | any>;
    protected ehListaValida: boolean;

    protected abstract validaLista(): boolean;
    public abstract calculaValorMaximo(): number | string;
    public abstract calculaValorMinimo(): number | string;
    public abstract calculaValorMedio(): number | string;
    public abstract realizaAnaliseCompleta(): Array<number> | string;
}