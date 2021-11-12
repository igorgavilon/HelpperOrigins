import AnaliseNumerica from "./AnaliseNumerica";

/**
 * classe que implementa os métodos da classe AnaliseNumerica
 * fazendo uso do paradigma funcional
 */
export default class AnaliseNumericaFuncional extends AnaliseNumerica{
    
    constructor(lista: Array<number | any>) {
        super();
        this.listaNumerica = lista;
        this.ehListaValida = this.validaLista();
    }

    /**
     * função que valida se a lista não é vazia e se todos os seus elementos são numéricos
     * @returns boolean se a lista é válida
     */
    protected validaLista(): boolean {
        return (this.listaNumerica.length !== 0) && (this.listaNumerica.every((elemento: any) => typeof elemento === 'number'));
    }
    
    /**
     * função que retorna o valor máximo entre dois números
     * @param a primeiro número
     * @param b segundo número
     * @returns number: o maior número
     */
    private valorMaximoEntre = (a: number, b: number) => Math.max(a, b);

    /**
     * função que retorna o valor mínimo entre dois números
     * @param a primeiro número
     * @param b segundo número
     * @returns number: o menor número
     */
    private valorMinimoEntre = (a: number, b: number) => Math.min(a, b);

    /**
     * função que retorna a soma do acumulador 'a' mais o valor de 'b' dividido pelo número total
     * de elemntos do array (lista.length)
     * @param a acumulador
     * @param b valor atual do array
     * @param indice índice do valor atual do array
     * @param lista array que está sendo iterado
     * @returns number: soma dos valores
     */
    private somaDosValores = (a: number, b: number, indice: number, lista: number[]) => a + (b/(lista.length || 1));
    
    /**
     * função que calcula o valor máximo de um array numérico
     * @returns number: valor máximo do array ou mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    public calculaValorMaximo(): number | string {
        if(!this.ehListaValida) {
            return 'O Array deve ser numérico e não ser vazio.'
        }
        return this.listaNumerica.reduce(this.valorMaximoEntre);
    }

    /**
     * função que calcula o valor mínimo de um array numérico
     * @returns number: valor mínimo do array ou mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    public calculaValorMinimo(): number | string {
        if(!this.ehListaValida) {
            return 'O Array deve ser numérico e não ser vazio.'
        }
        return this.listaNumerica.reduce(this.valorMinimoEntre);
    }
    
    /**
     * função que calcula o valor médio de um array numérico
     * @returns number: valor médio do array ou mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    public calculaValorMedio(): number | string {
        if(!this.ehListaValida) {
            return 'O Array deve ser numérico e não ser vazio.'
        }
        return this.listaNumerica.reduce(this.somaDosValores, 0);
    }

    /**
     * função que calcula os valores máximo, mínimo e médio de um array numérico
     * @returns number[]: array com [valor máximo, valor mínimo, valor médio] ou
     *          mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    public realizaAnaliseCompleta(): number[] | string {
        if(!this.ehListaValida) {
            return 'O Array deve ser numérico e não ser vazio.'
        }
        
        return [this.calculaValorMaximo(), this.calculaValorMinimo(), this.calculaValorMedio()];
    }

}