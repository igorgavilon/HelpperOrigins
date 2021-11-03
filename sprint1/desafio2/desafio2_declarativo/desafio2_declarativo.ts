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
    name = "name",
    bio = "bio"
}

/**
 * declaração do array de Objetos
 */
let lista2: Array<Scientist> = [
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
 * 
 * @param id id numérico que se deseja verificar
 * @returns true ou false, caso o id do elemento do array 
 *          seja igual ao parametro id ou não, respectivamente
 */
const equalId = (id: number) => (element: Scientist) => element.id === id;

/**
 * 
 * @param list lista de objetos Scientist
 * @param id id do objeto que deseja encontrar
 * @returns array com o objeto cujo id foi informado ou []
 */
const findById = (list: Array<Scientist>, id: number) => list.filter(equalId(id));

/**
 * função que retorna a bio do id passado
 * @param list lista com os objetos Scientist
 * @param id id numérico do objeto Scientist que deseja encontrar
 * @returns o atributo bio ou uma mensagem 'id não encontrado.'
 */
function getBio(list: Array<Scientist>, id: number): string {
    //array que armazenará o resultado do filtro
    let result: Array<Scientist> = [];
    //busca o objeto pelo id passado
    result = findById(list, id);
    //verifica se retornou algum objeto e retorna a bio
    //senão o id não foi encontrado
    return (result.length == 0 ? 'id não encontrado.' : result[0].bio);
}

/**
 * função que retorna o nome do id passado
 * @param list lista com os objetos Scientist
 * @param id id numérico do objeto Scientist que deseja encontrar
 * @returns o atributo name ou uma mensagem 'id não encontrado.'
 */
function getName(list: Array<Scientist>, id: number): string {
    //array que armazenará o resultado do filtro
    let result: Array<Scientist> = [];
    //busca o objeto pelo id passado
    result = findById(list, id);
    //verifica se retornou algum objeto e retorna o name
    //senão o id não foi encontrado
    return (result.length == 0 ? 'id não encontrado.' : result[0].name);
}

/**
 * 
 * @param id id numérico que se deseja verificar
 * @returns true ou false, caso o id do elemento do array 
 *          seja diferente ao parametro id ou não, respectivamente
 */
const diferentId = (id: number) => (element: Scientist) => element.id != id;

/**
 * função que remove um objeto da lista pelo id
 * @param list lista com os objetos Scientist
 * @param id id numérico do objeto Scientist que se deseja remover
 * @returns array do tipo Scientist com os elementos que não foram removidos
 */
function deleteById(list: Array<Scientist>, id: number): Scientist[] {
    //filtra o array e retira somente o objeto com o id passado
    return list.filter(diferentId(id));
}

/**
 * função que altera o valor de uma propriedade selecionada por parâmetro
 * para alterar 'name': EnumPersonProperties.name. para alterar 'bio': EnumPersonProperties.bio
 * @param property enum type: nome da propriedade do objeto Scientist que se deseja alterar
 * @param newValue novo valor para a propriedade
 * @returns o atributo com o seu novo valor
 */
const alterProperty = (property: EnumPersonProperties, newValue: string) => (element: Scientist) => element[property] = newValue;

/**
 * função que altera a propriedade "name" ou "bio" do objeto selecionado pelo id
 * para alterar 'name': EnumPersonProperties.name. para alterar 'bio': EnumPersonProperties.bio
 * @param list lista com os objetos Scientist
 * @param id id numérico do objeto que se deseja alterar
 * @param property nome da propriedade do objeto Scientist que se deseja alterar
 * @param newValue novo valor para a propriedade
 * @returns array do tipo Scientist contendo o item que foi atualizado
 */
function updateById(list: Array<Scientist>, id: number, property: EnumPersonProperties, newValue: string): Array<Scientist> {
    //array de cópia do array de entrada, list
    //retirando a referência de memória com: list.map((element: Scientist) => ({...element}))
    //garantindo a imutabilidade do parâmetro passaddo lista2
    let auxiliarList: Array<Scientist> = list.map((element: Scientist) => ({...element}));

    //faz uma busca do objeto pelo id, caso encontre altera o valor da propriedade 'nome' ou 'bio'
    findById(auxiliarList, id).map(alterProperty(property, newValue))
    return auxiliarList;
}

//realizando buscas para o id especificado
console.log(getName(lista2, 3));
console.log(getBio(lista2, 3));

//deletando o objeto pelo id especificado
console.log(deleteById(lista2, 3));

//testando a remoção de objeto de um id que não existe
//espera-se a seguinte resposta: id não encontrado
console.log(getName(lista2, 30));

//alterando as propriedades do id 1
console.log(updateById(lista2, 1, EnumPersonProperties.name, 'Igor Gavilon'));
console.log(updateById(lista2, 1, EnumPersonProperties.bio, 'Desenvolvedor de Software.'));

//imprime a lista original para verificar que os dados não foram alterados
console.log(lista2);