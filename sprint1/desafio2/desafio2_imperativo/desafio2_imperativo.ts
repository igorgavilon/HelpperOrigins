/**
 * definição do tipo de objeto que será utilizado em Array<Scientist>
 */
interface Scientist {
    id: number
    name: string
    bio: string
}

//enum que contém as propriedades que podem ser alteradas no objeto Scientist
enum EnumPersonProperties {
    NAME = "name",
    BIO = "bio"
}

/**
 * declaração do array de Objetos
 */
let lista: Array<Scientist> = [
    {id : 1, name: "Ada Lovelace", 
        bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", 
        bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", 
        bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", 
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

/**
 * função que retorna um elemento do array pelo id
 * @param list array de objetos Scientist
 * @param id id que deseja encontrar
 * @returns elemento que corresponde ao id passado ou null, caso não encontre
 */
function elementById(list: Array<Scientist>, id: number): Scientist | null {
    for(const element of list){
        if(element.id == id) {
            return element;
        }   
    }
    return null
}

/**
 * função que retorna a bio do id passado
 * @param id id numérico do objeto Scientist que deseja encontrar
 * @returns o atributo bio ou uma mensagem 'Nenhum id encontrado.'
 */
function getBio(id: number): string {
    //variável de resposta
    let response: Scientist | null;
    //busca entre os elementos do Array um objeto com o id
    response = elementById(lista, id);
    return (response == null ? 'Nenhum id encontrado.' : response.bio);
}

/**
 * função que retorna o nome do id passado
 * @param id id numérico do objeto Scientist que deseja encontrar
 * @returns o atributo name ou uma mensagem 'Nenhum id encontrado.'
 */
function getName(id: number): string {
    //variável de resposta
    let response: Scientist | null;
    //busca entre os elementos do Array um objeto com o id
    response = elementById(lista, id);
    return (response == null ? 'Nenhum id encontrado.' : response.name);
}

/**
 * função que remove um objeto da lista pelo id
 * @param id id numérico do objeto Scientist que se deseja remover
 */
function deleteById(id: number): void {
    //Array que guardará somente os objetos que não serão excluídos
    let temporaryList: Array<Scientist> = [];
    //busca pelos objetos que não serão excluídos
    //e guarda em temporaryList
    lista.forEach(element => {
        if(element.id != id) {
            temporaryList.push(element);
        }
    });
    //atualiza a lista após a exclusão do objeto selecionado pelo id
    lista = temporaryList;
}

/**
 * função que altera o valor da propriedade 'name' ou 'bio' do id passado
 * para alterar 'name': EnumPersonProperties.NAME. para alterar 'bio': EnumPersonProperties.BIO
 * @param id id numérico do objeto que se deseja alterar
 * @param property nome da propriedade do objeto Scientist que se deseja alterar
 * @param newValue novo valor para a propriedade
 * @returns mensagem do status da operação realizada ou falha, podendo ser:
 *          'Propriedade Name alterada.'
 *          'Propriedade Bio alterada.'
 *          'Nenhum id encontrado.'
 */
function updateById(id: number, property: EnumPersonProperties, newValue: string): string {
    //resposta padrão caso não encontre um id válido
    let response: string = 'Nenhum id encontrado.';

    //busca pelo elemento que será alterado
    let elementFound: Scientist | null = elementById(lista, id);

    //caso o objeto seja encontrado, altera a propriedade selecionada
    if(elementFound != null) {
        elementFound[property] = newValue;
        response = `Propriedade "${property}" alterada.`;
    }

    //retorna uma resposta informando se a operação foi efetuada ou não
    return (response);
}

//realizando buscas para o id especificado
console.log(getName(3));
console.log(getBio(3));
//deletando o id especificado
deleteById(3);
//testando se o id foi deletado
console.log(getName(3));

//alterando as propriedades do id 1
console.log(updateById(1, EnumPersonProperties.NAME, 'igor gavilon'));
console.log(updateById(1, EnumPersonProperties.BIO, 'desenvolvedor de software'));
//tenta alterar um objeto com um id que não existe
//resposta esperada: "Nenhum id encontrado."
console.log(updateById(100, EnumPersonProperties.BIO, 'alterando um id não existente'));

//imprime a lista para verificar que os dados foram realmente alterados
console.log(lista);