"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var CientistaFuncional = /** @class */ (function () {
    function CientistaFuncional(lista) {
        var _this = this;
        /**
         * função que verifica se o id de um objeto é igual ao id passado
         * @param id id que deseja verificar igualdade
         * @returns boolean
         */
        this.verificaIdIgual = function (id) { return function (elemento) { return elemento.id === id; }; };
        /**
         * função que verifica se o id de um objeto é diferente do id passado
         * @param id id que deseja verificar diferença
         * @returns boolean
         */
        this.verificaIdDiferente = function (id) { return function (elemento) { return elemento.id != id; }; };
        /**
         * função que busca um item do array pelo id
         * @param lista array que contém os itens
         * @param id id que deseja buscar
         * @returns array com o item resultante da busca
         */
        this.buscaItemPeloId = function (lista, id) { return lista.filter(_this.verificaIdIgual(id)); };
        /**
         * função que altera uma propriedade de um objeto
         * @param propriedade propriedade tipo enum: EnumPropriedadesCientista.NOME ou EnumPropriedadesCientista.BIO
         * @param novoValor string com o novo valor da propriedade
         * @returns objeto do tipo ICientista com a propriedade alterada
         */
        this.alteraPropriedadeDoObjeto = function (propriedade, novoValor) { return function (elemento) { return elemento[propriedade] = novoValor; }; };
        this.listaCientistas = lista;
    }
    /**
     * funçao que retorna a bio de um objeto, sendo a busca realizada pelo id
     * @param id id do objeto procurado
     * @returns string com a informação da bio ou a mensagem "Nenhum id encontrado."
     */
    CientistaFuncional.prototype.mostraBioPeloId = function (id) {
        //array que armazenará o resultado do filtro
        var resultado = [];
        //busca o objeto pelo id passado
        resultado = this.buscaItemPeloId(this.listaCientistas, id);
        //verifica se retornou algum objeto e retorna a bio
        //senão o id não foi encontrado
        return (resultado.length == 0 ? 'Nenhum id encontrado.' : resultado[0].bio);
    };
    /**
     * funçao que retorna o name de um objeto, sendo a busca realizada pelo id
     * @param id id do objeto procurado
     * @returns string com a informação do name ou a mensagem "Nenhum id encontrado."
     */
    CientistaFuncional.prototype.mostraNomePeloId = function (id) {
        //array que armazenará o resultado do filtro
        var resultado = [];
        //busca o objeto pelo id passado
        resultado = this.buscaItemPeloId(this.listaCientistas, id);
        //verifica se retornou algum objeto e retorna o name
        //senão o id não foi encontrado
        return (resultado.length == 0 ? 'Nenhum id encontrado.' : resultado[0].name);
    };
    /**
     * função que deleta um item do array do tipo ICientista
     * @param id id do objeto a ser deletado
     * @returns array do tipo ICientista com os itens restantes
     */
    CientistaFuncional.prototype.deletaCientistaPeloId = function (id) {
        //filtra o array e retira somente o objeto com o id passado
        return this.listaCientistas.filter(this.verificaIdDiferente(id));
    };
    /**
     * função que altera a propriedade de um objeto selecionado pelo seu id
     * @param id id do objeto a ser alterado
     * @param propriedade propriedade tipo enum: EnumPropriedadesCientista.NOME ou EnumPropriedadesCientista.BIO
     * @param novoValor string com o novo valor da propriedade
     * @returns array do tipo ICientista contendo o item alterado
     */
    CientistaFuncional.prototype.alteraPropriedadePeloId = function (id, propriedade, novoValor) {
        //array de cópia do array this.listaCientistas
        //retirando a referência de memória com: list.map((element: Scientist) => ({...element}))
        //garantindo a imutabilidade do array this.listaCientistas
        var listaAuxiliar = this.listaCientistas.map(function (elemento) { return (__assign({}, elemento)); });
        //faz uma busca do objeto pelo id, caso encontre altera o valor da propriedade 'nome' ou 'bio'
        this.buscaItemPeloId(listaAuxiliar, id).map(this.alteraPropriedadeDoObjeto(propriedade, novoValor));
        return listaAuxiliar;
    };
    return CientistaFuncional;
}());
exports["default"] = CientistaFuncional;
