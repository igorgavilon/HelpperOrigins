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
var Cientista_1 = require("./Cientista");
/**
 * classe CientistaDestaque: contém 4 atributos
 * e sobrescreve o método toString() da classe pai
 */
var CientistaDestaque = /** @class */ (function (_super) {
    __extends(CientistaDestaque, _super);
    function CientistaDestaque(id, name, bio, destaque) {
        var _this = _super.call(this, id, name, bio) || this;
        _this.destaque = destaque;
        return _this;
    }
    /**
     * método que imprime no console o nome, a bio e a característica de destaque de uma instância da classe CientistaDestaque
     */
    CientistaDestaque.prototype.toString = function () {
        console.log("\nNome: " + this.name + " \nBio: " + this.bio + " \n>>>>>Destaque: " + this.destaque + "<<<<<");
    };
    return CientistaDestaque;
}(Cientista_1["default"]));
exports["default"] = CientistaDestaque;
