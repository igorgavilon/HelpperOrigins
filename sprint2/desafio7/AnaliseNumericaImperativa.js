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
        _this.ehListaValida = _this.validaLista();
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
        for (var _i = 0, _a = this.listaNumerica; _i < _a.length; _i++) {
            var item = _a[_i];
            if (typeof (item) !== 'number') {
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
        if (!this.ehListaValida) {
            return 'O Array deve ser numérico e não ser vazio.';
        }
        var valorMaximo;
        valorMaximo = this.listaNumerica[0];
        for (var _i = 0, _a = this.listaNumerica; _i < _a.length; _i++) {
            var valorAtual = _a[_i];
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
        if (!this.ehListaValida) {
            return 'O Array deve ser numérico e não ser vazio.';
        }
        var valorMinimo;
        valorMinimo = this.listaNumerica[0];
        for (var _i = 0, _a = this.listaNumerica; _i < _a.length; _i++) {
            var valorAtual = _a[_i];
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
        if (!this.ehListaValida) {
            return 'O Array deve ser numérico e não ser vazio.';
        }
        var soma;
        for (var _i = 0, _a = this.listaNumerica; _i < _a.length; _i++) {
            var valorAtual = _a[_i];
            soma += valorAtual;
        }
        return (soma / (this.listaNumerica.length || 1));
    };
    /**
     * função que calcula os valores máximo, mínimo e médio de um array numérico
     * @returns number[]: array com [valor máximo, valor mínimo, valor médio] ou
     *          mensagem: 'O Array deve ser numérico e não ser vazio.'
     */
    AnaliseNumericaImperativa.prototype.realizaAnaliseCompleta = function () {
        if (!this.ehListaValida) {
            return 'O Array deve ser numérico e não ser vazio.';
        }
        return [this.calculaValorMaximo(), this.calculaValorMinimo(), this.calculaValorMedio()];
    };
    return AnaliseNumericaImperativa;
}(AnaliseNumerica_1["default"]));
exports["default"] = AnaliseNumericaImperativa;
