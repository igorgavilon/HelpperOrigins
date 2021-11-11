/**
 * classe Cientista: contém 3 atributos e um método toString()
 */
export default class Cientista {
    //atributos protected para podermos acessá-los por herança
    protected id: number;
    protected nome: string;
    protected bio: string;

    constructor(id: number, nome: string, bio: string) {
        this.id = id;
        this.nome = nome;
        this.bio = bio;
    }

    /**
     * método que imprime no console o nome e a bio de uma instância da classe Cientista
     */
    public toString(): void {
        console.log(`\nNome: ${this.nome} \nBio: ${this.bio}`);
    }
}