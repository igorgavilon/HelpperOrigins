"use strict";
exports.__esModule = true;
var Cientista_1 = require("./Cientista");
var CientistaDestaque_1 = require("./CientistaDestaque");
/**
 * classe fábrica de instâncias da classe Cientista
 */
var CientistaFactory = /** @class */ (function () {
    function CientistaFactory() {
    }
    //função estática que instancia um objeto de uma das classes
    //Cientista ou CientistaDestaque, conforme a lógica apresentada
    CientistaFactory.criaNovoCientista = function (cientista) {
        //verifica se a cientista em questão é a Ada Lovelace
        if (cientista.name.includes("Ada Lovelace")) {
            //caso seja, instancia a classe CientistaDestaque que possui um atributo destaque
            //será mostrado no console o valor do atributo de destaque
            return new CientistaDestaque_1["default"](cientista.id, cientista.name, cientista.bio, "Esta cientista criou a linguagem de programação Ada.");
        }
        else {
            //caso não seja, instancia uma classe Cientista, sem o atributo de destaque
            return new Cientista_1["default"](cientista.id, cientista.name, cientista.bio);
        }
    };
    return CientistaFactory;
}());
exports["default"] = CientistaFactory;
