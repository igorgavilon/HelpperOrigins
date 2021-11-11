import AnaliseNumerica from "./AnaliseNumerica";

/**
 * classe que implementa os métodos da classe AnaliseNumerica
 * fazendo uso do paradigma imperativo
 */
export default class AnaliseNumericaImperativa extends AnaliseNumerica{

    constructor(lista: Array<number | any>) {
        super();
        this.listaNumerica = lista;
    }

    /**
     * função que valida se a lista não é vazia e se todos os seus elementos são numéricos
     * @returns boolean se a lista é válida
     */
    protected validaLista(): boolean {
        if(this.listaNumerica.length == 0) {
            return false;
        }

        for(let indice = 0; indice < this.listaNumerica.length; indice++) {
            if (typeof(this.listaNumerica[indice]) !== 'number') {
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
        if(!this.validaLista()) {
            return 'O Array deve ser numérico e não ser vazio.'
        }
        let valorMaximo: number;
        valorMaximo = this.listaNumerica[0];
        for(let indice = 1; indice < this.listaNumerica.length; indice++) {
            let valorAtual: number = this.listaNumerica[indice];
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
        if(!this.validaLista()) {
            return 'O Array deve ser numérico e não ser vazio.'
        }
        let valorMinimo: number;
        valorMinimo = this.listaNumerica[0];
        for(let indice = 1; indice < this.listaNumerica.length; indice++) {
            let valorAtual: number = this.listaNumerica[indice];
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
        if(!this.validaLista()) {
            return 'O Array deve ser numérico e não ser vazio.'
        }
        let soma, valorMedio: number;
        for(let indice = 0; indice < this.listaNumerica.length; indice++) {
            let valorAtual: number = this.listaNumerica[indice];
            soma += valorAtual;
        }
        valorMedio = soma/this.listaNumerica.length;
        return valorMedio;
    }

    /**
     * função que calcula os valores máximo, mínimo e médio de um array numérico
     * @returns number[]: array com [valor máximo, valor mínimo, valor médio] ou
     *          mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    public realizaAnaliseCompleta(): Array<number> | string {
        if(!this.validaLista()) {
            return 'O Array deve ser numérico e não ser vazio.'
        }
        let valorMaximo, valorMinimo, valorMedio: number;
        valorMaximo = this.calculaValorMaximo();
        valorMinimo = this.calculaValorMinimo();
        valorMedio = this.calculaValorMedio();
        
        return [valorMaximo, valorMinimo, valorMedio];
    }
}