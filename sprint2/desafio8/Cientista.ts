/**
 * classe Cientista: contém 3 atributos e um método toString()
 */
export default class Cientista {
    public id: number;
    public name: string;
    public bio: string;

    constructor(id: number, name: string, bio: string) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }

    /**
     * método que imprime no console o nome e a bio de uma instância da classe Cientista
     */
    public toString(): void {
        console.log(`\nNome: ${this.name} \nBio: ${this.bio}`);
    }
}