import ICientista from "./ICientista";
import IInfoCientistas from "./IInfoCientistas";
import { EnumPropriedadesCientista } from "./Tipos";

export default class CientistaImperativo implements IInfoCientistas{
    private listaCientistas: Array<ICientista>;

    constructor(lista: Array<ICientista>) {
        this.listaCientistas = lista;
    }

    /**
     * função que busca um item do array pelo id
     * @param id id que deseja buscar
     * @returns array com o item resultante da busca
     */
    private buscaItemPeloId(id: number): ICientista | null {
        for(const elemento of this.listaCientistas){
            if(elemento.id == id) {
                return elemento;
            }   
        }
        return null
    }

    /**
     * funçao que retorna a bio de um objeto, sendo a busca realizada pelo id
     * @param id id do objeto procurado
     * @returns string com a informação da bio ou a mensagem "Nenhum id encontrado."
     */
    public mostraBioPeloId(id: number): string {
        //variável de resposta
        let resposta: ICientista | null;
        //busca entre os elementos do Array um objeto com o id
        resposta = this.buscaItemPeloId(id);
        return (resposta == null ? 'Nenhum id encontrado.' : resposta.bio);
    }

    /**
     * funçao que retorna o name de um objeto, sendo a busca realizada pelo id
     * @param id id do objeto procurado
     * @returns string com a informação do name ou a mensagem "Nenhum id encontrado."
     */
    public mostraNomePeloId(id: number): string {
        //variável de resposta
        let resposta: ICientista | null;
        //busca entre os elementos do Array um objeto com o id
        resposta = this.buscaItemPeloId(id);
        return (resposta == null ? 'Nenhum id encontrado.' : resposta.name);
    }

    /**
     * função que deleta um item do array do tipo ICientista
     * @param id id do objeto a ser deletado
     */
    public deletaCientistaPeloId(id: number): void {
        //Array que guardará somente os objetos que não serão excluídos
        let listaAuxiliar: Array<ICientista> = [];
        //busca pelos objetos que não serão excluídos
        //e guarda em temporaryList
        this.listaCientistas.forEach(elemento => {
            if(elemento.id != id) {
                listaAuxiliar.push(elemento);
            }
        });
        //atualiza a lista após a exclusão do objeto selecionado pelo id
        this.listaCientistas = listaAuxiliar;
    }

    /**
     * função que altera a propriedade de um objeto selecionado pelo seu id
     * @param id id do objeto a ser alterado
     * @param propriedade propriedade tipo enum: EnumPropriedadesCientista.NOME ou EnumPropriedadesCientista.BIO
     * @param novoValor string com o novo valor da propriedade
     * @returns string com mensagem informando qual propriedade foi alterada ou "Nenhum id encontrado."
     */
    public alteraPropriedadePeloId(id: number, propriedade: EnumPropriedadesCientista, novoValor: string): string {
        //resposta padrão caso não encontre um id válido
        let resposta: string = 'Nenhum id encontrado.';

        //busca pelo elemento que será alterado
        let elementoASerAlterado: ICientista | null = this.buscaItemPeloId(id);

        //caso o objeto seja encontrado, altera a propriedade selecionada
        if(elementoASerAlterado != null) {
            elementoASerAlterado[propriedade] = novoValor;
            resposta = `Propriedade "${propriedade}" alterada.`;
        }

        //retorna uma resposta informando se a operação foi efetuada ou não
        return resposta;
    }

}