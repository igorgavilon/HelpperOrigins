"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AnaliseNumerica_1 = require("./AnaliseNumerica");
/**
 * classe que implementa os métodos da classe AnaliseNumerica
 * fazendo uso do paradigma imperativo
 */
var AnaliseNumericaImperativa = /** @class */ (function (_super) {
    __extends(AnaliseNumericaImperativa, _super);
    function AnaliseNumericaImperativa(lista) {
        var _this = _super.call(this) || this;
        _this.listaNumerica = lista;
        return _this;
    }
    /**
     * função que valida se a lista não é vazia e se todos os seus elementos são numéricos
     * @returns boolean se a lista é válida
     */
    AnaliseNumericaImperativa.prototype.validaLista = function () {
        if (this.listaNumerica.length == 0) {
            return false;
        }
        for (var indice = 0; indice < this.listaNumerica.length; indice++) {
            if (typeof (this.listaNumerica[indice]) !== 'number') {
                return false;
            }
        }
        return true;
    };
    /**
     * função que calcula o valor máximo de um array numérico
     * @returns number: valor máximo do array ou mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    AnaliseNumericaImperativa.prototype.calculaValorMaximo = function () {
        if (!this.validaLista()) {
            return 'O Array deve ser numérico e não ser vazio.';
        }
        var valorMaximo;
        valorMaximo = this.listaNumerica[0];
        for (var indice = 1; indice < this.listaNumerica.length; indice++) {
            var valorAtual = this.listaNumerica[indice];
            if (valorAtual > valorMaximo) {
                valorMaximo = valorAtual;
            }
        }
        return valorMaximo;
    };
    /**
     * função que calcula o valor mínimo de um array numérico
     * @returns number: valor mínimo do array ou mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    AnaliseNumericaImperativa.prototype.calculaValorMinimo = function () {
        if (!this.validaLista()) {
            return 'O Array deve ser numérico e não ser vazio.';
        }
        var valorMinimo;
        valorMinimo = this.listaNumerica[0];
        for (var indice = 1; indice < this.listaNumerica.length; indice++) {
            var valorAtual = this.listaNumerica[indice];
            if (valorAtual < valorMinimo) {
                valorMinimo = valorAtual;
            }
        }
        return valorMinimo;
    };
    /**
     * função que calcula o valor médio de um array numérico
     * @returns number: valor médio do array ou mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    AnaliseNumericaImperativa.prototype.calculaValorMedio = function () {
        if (!this.validaLista()) {
            return 'O Array deve ser numérico e não ser vazio.';
        }
        var soma, valorMedio;
        for (var indice = 0; indice < this.listaNumerica.length; indice++) {
            var valorAtual = this.listaNumerica[indice];
            soma += valorAtual;
        }
        valorMedio = soma / this.listaNumerica.length;
        return valorMedio;
    };
    /**
     * função que calcula os valores máximo, mínimo e médio de um array numérico
     * @returns number[]: array com [valor máximo, valor mínimo, valor médio] ou
     *          mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    AnaliseNumericaImperativa.prototype.realizaAnaliseCompleta = function () {
        if (!this.validaLista()) {
            return 'O Array deve ser numérico e não ser vazio.';
        }
        var valorMaximo, valorMinimo, valorMedio;
        valorMaximo = this.calculaValorMaximo();
        valorMinimo = this.calculaValorMinimo();
        valorMedio = this.calculaValorMedio();
        return [valorMaximo, valorMinimo, valorMedio];
    };
    return AnaliseNumericaImperativa;
}(AnaliseNumerica_1["default"]));
exports["default"] = AnaliseNumericaImperativa;
