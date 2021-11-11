"use strict";
exports.__esModule = true;
var AnaliseNumericaFuncional_1 = require("./AnaliseNumericaFuncional");
var AnaliseNumericaImperativa_1 = require("./AnaliseNumericaImperativa");
var Tipos_1 = require("./Tipos");
/**
 * classe que serve de fábrica para objetos do tipo AnaliseNumerica
 * e suas duas classes filhas AnaliseNumericaImperativa e AnaliseNumericaFuncional
 */
var AnaliseNumericaFactory = /** @class */ (function () {
    //o construtor irá verificar qual tipo de paradigma foi selecionado
    //então criará uma instância da classe apropriada, que implementa os métodos
    //da classe AnaliseNumerica aplicando um dos dois paradigmas
    function AnaliseNumericaFactory(lista, paradigma) {
        if (paradigma = Tipos_1.EnumParadigmaProgramacao.IMPERATIVO) {
            return new AnaliseNumericaImperativa_1["default"](lista);
        }
        if (paradigma = Tipos_1.EnumParadigmaProgramacao.FUNCIONAL) {
            return new AnaliseNumericaFuncional_1["default"](lista);
        }
    }
    return AnaliseNumericaFactory;
}());
exports["default"] = AnaliseNumericaFactory;
