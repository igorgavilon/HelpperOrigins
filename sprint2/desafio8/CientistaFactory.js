"use strict";
exports.__esModule = true;
var Cientista_1 = require("./Cientista");
var CientistaDestaque_1 = require("./CientistaDestaque");
/**
 * classe fábrica de instâncias da classe Cientista
 */
var CientistaFactory = /** @class */ (function () {
    //construtor recebe um array do tipo ICientista
    function CientistaFactory(lista) {
        //para cada item da lista é criada uma instância de uma determinada classe
        //e também é chamado o método toString() de cada instância
        for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
            var cientista = lista_1[_i];
            //verifica se a cientista em questão é a Ada Lovelace
            if (cientista.name.includes("Ada Lovelace")) {
                //caso seja, instancia a classe CientistaDestaque que possui um atributo destaque
                //será mostrado no console o valor do atributo de destaque
                new CientistaDestaque_1["default"](cientista.id, cientista.name, cientista.bio).toString();
            }
            else {
                //caso não seja, instancia uma classe Cientista, sem o atributo de destaque
                new Cientista_1["default"](cientista.id, cientista.name, cientista.bio).toString();
            }
        }
    }
    return CientistaFactory;
}());
exports["default"] = CientistaFactory;
