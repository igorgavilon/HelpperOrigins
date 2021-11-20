import InfoCientistas from "./IInfoCientistas";
import ICientista from "./ICientista";
import { EnumPropriedadesCientista } from "./Tipos";

export default class CientistaFuncional implements InfoCientistas{
    private listaCientistas: Array<ICientista>;

    constructor(lista: Array<ICientista>) {
        this.listaCientistas = lista;
    }

    /**
     * função que verifica se o id de um objeto é igual ao id passado
     * @param id id que deseja verificar igualdade
     * @returns boolean
     */
    private verificaIdIgual = (id: number) => (elemento: ICientista) => elemento.id === id;
    
    /**
     * função que verifica se o id de um objeto é diferente do id passado
     * @param id id que deseja verificar diferença
     * @returns boolean
     */
    private verificaIdDiferente = (id: number) => (elemento: ICientista) => elemento.id != id;
    
    /**
     * função que busca um item do array pelo id
     * @param lista array que contém os itens
     * @param id id que deseja buscar
     * @returns array com o item resultante da busca
     */
    private buscaItemPeloId = (lista: Array<ICientista>, id: number) => lista.filter(this.verificaIdIgual(id));

    /**
     * função que altera uma propriedade de um objeto
     * @param propriedade propriedade tipo enum: EnumPropriedadesCientista.NOME ou EnumPropriedadesCientista.BIO
     * @param novoValor string com o novo valor da propriedade
     * @returns objeto do tipo ICientista com a propriedade alterada
     */
    private alteraPropriedadeDoObjeto = (propriedade: EnumPropriedadesCientista, novoValor: string) => (elemento: ICientista) => elemento[propriedade] = novoValor;

    /**
     * funçao que retorna a bio de um objeto, sendo a busca realizada pelo id
     * @param id id do objeto procurado
     * @returns string com a informação da bio ou a mensagem "Nenhum id encontrado."
     */
    public mostraBioPeloId(id: number): string {
        //array que armazenará o resultado do filtro
        let resultado: Array<ICientista> = [];
        //busca o objeto pelo id passado
        resultado = this.buscaItemPeloId(this.listaCientistas, id);
        //verifica se retornou algum objeto e retorna a bio
        //senão o id não foi encontrado
        return (resultado.length == 0 ? 'Nenhum id encontrado.' : resultado[0].bio);
    }

    /**
     * funçao que retorna o name de um objeto, sendo a busca realizada pelo id
     * @param id id do objeto procurado
     * @returns string com a informação do name ou a mensagem "Nenhum id encontrado."
     */
    public mostraNomePeloId(id: number): string {
        //array que armazenará o resultado do filtro
        let resultado: Array<ICientista> = [];
        //busca o objeto pelo id passado
        resultado = this.buscaItemPeloId(this.listaCientistas, id);
        //verifica se retornou algum objeto e retorna o name
        //senão o id não foi encontrado
        return (resultado.length == 0 ? 'Nenhum id encontrado.' : resultado[0].name);
    }

    /**
     * função que deleta um item do array do tipo ICientista
     * @param id id do objeto a ser deletado
     * @returns array do tipo ICientista com os itens restantes
     */
    public deletaCientistaPeloId(id: number): void | Array<ICientista> {
        //filtra o array e retira somente o objeto com o id passado
        return this.listaCientistas.filter(this.verificaIdDiferente(id));
    }

    /**
     * função que altera a propriedade de um objeto selecionado pelo seu id
     * @param id id do objeto a ser alterado
     * @param propriedade propriedade tipo enum: EnumPropriedadesCientista.NOME ou EnumPropriedadesCientista.BIO
     * @param novoValor string com o novo valor da propriedade
     * @returns array do tipo ICientista contendo o item alterado
     */
    public alteraPropriedadePeloId(id: number, propriedade: EnumPropriedadesCientista, novoValor: string): string | Array<ICientista> {
        //array de cópia do array this.listaCientistas
        //retirando a referência de memória com: list.map((element: Scientist) => ({...element}))
        //garantindo a imutabilidade do array this.listaCientistas
        let listaAuxiliar: Array<ICientista> = this.listaCientistas.map((elemento: ICientista) => ({...elemento}));

        //faz uma busca do objeto pelo id, caso encontre altera o valor da propriedade 'nome' ou 'bio'
        this.buscaItemPeloId(listaAuxiliar, id).map(this.alteraPropriedadeDoObjeto(propriedade, novoValor));
        return listaAuxiliar;
    }

}