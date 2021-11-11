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
 * fazendo uso do paradigma funcional
 */
var AnaliseNumericaFuncional = /** @class */ (function (_super) {
    __extends(AnaliseNumericaFuncional, _super);
    function AnaliseNumericaFuncional(lista) {
        var _this = _super.call(this) || this;
        /**
         * função que retorna o valor máximo entre dois números
         * @param a primeiro número
         * @param b segundo número
         * @returns number: o maior número
         */
        _this.maximoValor = function (a, b) { return Math.max(a, b); };
        /**
         * função que retorna o valor mínimo entre dois números
         * @param a primeiro número
         * @param b segundo número
         * @returns number: o menor número
         */
        _this.minimoValor = function (a, b) { return Math.min(a, b); };
        /**
         * função que retorna a soma do acumulador 'a' mais o valor de 'b' dividido pelo número total
         * de elemntos do array (lista.length)
         * @param a acumulador
         * @param b valor atual do array
         * @param indice índice do valor atual do array
         * @param lista array que está sendo iterado
         * @returns number: soma dos valores
         */
        _this.somaDosValores = function (a, b, indice, lista) { return a + (b / lista.length); };
        _this.listaNumerica = lista;
        return _this;
    }
    /**
     * função que valida se a lista não é vazia e se todos os seus elementos são numéricos
     * @returns boolean se a lista é válida
     */
    AnaliseNumericaFuncional.prototype.validaLista = function () {
        return (this.listaNumerica.length !== 0) && (this.listaNumerica.every(function (elemento) { return typeof elemento === 'number'; }));
    };
    /**
     * função que calcula o valor máximo de um array numérico
     * @returns number: valor máximo do array ou mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    AnaliseNumericaFuncional.prototype.calculaValorMaximo = function () {
        if (!this.validaLista()) {
            return 'O Array deve ser numérico e não ser vazio.';
        }
        return this.listaNumerica.reduce(this.maximoValor);
    };
    /**
     * função que calcula o valor mínimo de um array numérico
     * @returns number: valor mínimo do array ou mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    AnaliseNumericaFuncional.prototype.calculaValorMinimo = function () {
        if (!this.validaLista()) {
            return 'O Array deve ser numérico e não ser vazio.';
        }
        return this.listaNumerica.reduce(this.minimoValor);
    };
    /**
     * função que calcula o valor médio de um array numérico
     * @returns number: valor médio do array ou mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    AnaliseNumericaFuncional.prototype.calculaValorMedio = function () {
        if (!this.validaLista()) {
            return 'O Array deve ser numérico e não ser vazio.';
        }
        return this.listaNumerica.reduce(this.somaDosValores, 0);
    };
    /**
     * função que calcula os valores máximo, mínimo e médio de um array numérico
     * @returns number[]: array com [valor máximo, valor mínimo, valor médio] ou
     *          mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    AnaliseNumericaFuncional.prototype.realizaAnaliseCompleta = function () {
        if (!this.validaLista()) {
            return 'O Array deve ser numérico e não ser vazio.';
        }
        var valorMaximo, valorMinimo, valorMedio;
        valorMaximo = this.calculaValorMaximo();
        valorMinimo = this.calculaValorMinimo();
        valorMedio = this.calculaValorMedio();
        return [valorMaximo, valorMinimo, valorMedio];
    };
    return AnaliseNumericaFuncional;
}(AnaliseNumerica_1["default"]));
exports["default"] = AnaliseNumericaFuncional;
