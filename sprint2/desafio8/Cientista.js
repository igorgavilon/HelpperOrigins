"use strict";
exports.__esModule = true;
/**
 * classe Cientista: contém 3 atributos e um método toString()
 */
var Cientista = /** @class */ (function () {
    function Cientista(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }
    /**
     * método que imprime no console o nome e a bio de uma instância da classe Cientista
     */
    Cientista.prototype.toString = function () {
        console.log("\nNome: " + this.name + " \nBio: " + this.bio);
    };
    return Cientista;
}());
exports["default"] = Cientista;
