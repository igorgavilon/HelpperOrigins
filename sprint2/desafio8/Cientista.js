"use strict";
exports.__esModule = true;
/**
 * classe Cientista: contém 3 atributos e um método toString()
 */
var Cientista = /** @class */ (function () {
    function Cientista(id, nome, bio) {
        this.id = id;
        this.nome = nome;
        this.bio = bio;
    }
    /**
     * método que imprime no console o nome e a bio de uma instância da classe Cientista
     */
    Cientista.prototype.toString = function () {
        console.log("\nNome: " + this.nome + " \nBio: " + this.bio);
    };
    return Cientista;
}());
exports["default"] = Cientista;
