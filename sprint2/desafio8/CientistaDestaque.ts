import Cientista from "./Cientista";

/**
 * classe CientistaDestaque: contém 4 atributos
 * e sobrescreve o método toString() da classe pai
 */
export default class CientistaDestaque extends Cientista {
    //atributo de destaque
    private destaque: string;

    constructor(id: number, nome: string, bio: string) {
        super(id, nome, bio);
        this.destaque = "Esta cientista criou a linguagem de programação Ada."
    }

    /**
     * método que imprime no console o nome, a bio e a característica de destaque de uma instância da classe CientistaDestaque
     */
    public override toString(): void {
        console.log(`\nNome: ${this.nome} \nBio: ${this.bio} \n>>>>>Destaque: ${this.destaque}<<<<<`);
    }
    
}