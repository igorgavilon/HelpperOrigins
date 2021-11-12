import AnaliseNumerica from "./AnaliseNumerica";

/**
 * classe que implementa os métodos da classe AnaliseNumerica
 * fazendo uso do paradigma imperativo
 */
export default class AnaliseNumericaImperativa extends AnaliseNumerica{

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
        if(this.listaNumerica.length == 0) {
            return false;
        }
        for(let item of this.listaNumerica) {
            if(typeof(item) !== 'number') {
                return false;
            }
        }
        return true;
    }
    
    /**
     * função que calcula o valor máximo de um array numérico
     * @returns number: valor máximo do array ou mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    public calculaValorMaximo(): number | string {
        if(!this.ehListaValida) {
            return 'O Array deve ser numérico e não ser vazio.'
        }
        let valorMaximo: number;
        valorMaximo = this.listaNumerica[0];
        for(let valorAtual of this.listaNumerica) {
            if(valorAtual > valorMaximo) {
                valorMaximo = valorAtual;
            }
        }
        return valorMaximo;
    }

    /**
     * função que calcula o valor mínimo de um array numérico
     * @returns number: valor mínimo do array ou mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    public calculaValorMinimo(): number | string {
        if(!this.ehListaValida) {
            return 'O Array deve ser numérico e não ser vazio.'
        }
        let valorMinimo: number;
        valorMinimo = this.listaNumerica[0];
        for(let valorAtual of this.listaNumerica) {
            if(valorAtual < valorMinimo) {
                valorMinimo = valorAtual;
            }
        }
        return valorMinimo;
    }

    /**
     * função que calcula o valor médio de um array numérico
     * @returns number: valor médio do array ou mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    public calculaValorMedio(): number | string {
        if(!this.ehListaValida) {
            return 'O Array deve ser numérico e não ser vazio.'
        }
        let soma: number;
        for(let valorAtual of this.listaNumerica) {
            soma += valorAtual;
        }
        return (soma/(this.listaNumerica.length || 1));
    }

    /**
     * função que calcula os valores máximo, mínimo e médio de um array numérico
     * @returns number[]: array com [valor máximo, valor mínimo, valor médio] ou
     *          mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    public realizaAnaliseCompleta(): Array<number> | string {
        if(!this.ehListaValida) {
            return 'O Array deve ser numérico e não ser vazio.'
        }
        
        return [this.calculaValorMaximo(), this.calculaValorMinimo(), this.calculaValorMedio()];
    }
}