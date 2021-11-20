import Cientista from "./Cientista";

/**
 * classe CientistaDestaque: contém 4 atributos
 * e sobrescreve o método toString() da classe pai
 */
export default class CientistaDestaque extends Cientista {
    //atributo de destaque
    private destaque: string;

    constructor(id: number, name: string, bio: string, destaque: string) {
        super(id, name, bio);
        this.destaque = destaque;
    }

    /**
     * método que imprime no console o nome, a bio e a característica de destaque de uma instância da classe CientistaDestaque
     */
    public override toString(): void {
        console.log(`\nNome: ${this.name} \nBio: ${this.bio} \n>>>>>Destaque: ${this.destaque}<<<<<`);
    }
    
}