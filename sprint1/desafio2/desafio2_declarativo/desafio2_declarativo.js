"use strict";
/**
 * declaração do array de Objetos
 */
var lista2 = [
    { id: 1, name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { id: 3, name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/**
 *
 * @param id id numérico que se deseja verificar
 * @returns true ou false, caso o id do elemento do array
 *          seja igual ao parametro id ou não, respectivamente
 */
var equalId = function (id) { return function (element) { return element.id == id; }; };
/**
 * função que retorna a bio do id passado
 * @param id id numérico do objeto Scientist que deseja encontrar
 * @returns o atributo bio ou uma mensagem 'id não encontrado.'
 */
function getBio(id) {
    //array que armazenará o resultado do filtro
    var result = [];
    //filtra o objeto com id passado para essa função
    result = lista2.filter(equalId(id));
    //verifica se o filtro retornou algum objeto e retorna a bio
    //senão o id não foi encontrado
    return (result.length == 0 ? 'id não encontrado.' : result[0].bio);
}
/**
 * função que retorna o nome do id passado
 * @param id id numérico do objeto Scientist que deseja encontrar
 * @returns o atributo name ou uma mensagem 'id não encontrado.'
 */
function getName(id) {
    //array que armazenará o resultado do filtro
    var result = [];
    //filtra o objeto com id passado para essa função
    result = lista2.filter(equalId(id));
    //verifica se o filtro retornou algum objeto e retorna o name
    //senão o id não foi encontrado
    return (result.length == 0 ? 'id não encontrado.' : result[0].name);
}
/**
 *
 * @param id id numérico que se deseja verificar
 * @returns true ou false, caso o id do elemento do array
 *          seja diferente ao parametro id ou não, respectivamente
 */
var diferentId = function (id) { return function (element) { return element.id != id; }; };
/**
 * função que remove um objeto da lista pelo id
 * @param id id numérico do objeto Scientist que se deseja remover
 * @returns array do tipo Scientist com os elementos que não foram removidos
 */
function deleteById(id) {
    //filtra o array e retira somente o objeto com o id passado
    return lista2.filter(diferentId(id));
}
/**
 * função que altera o valor de uma propriedade selecionada por parâmetro
 * para alterar 'name': property = 'name'. para alterar 'bio': property = 'bio'
 * @param property nome da propriedade do objeto Scientist que se deseja alterar
 * @param newValue novo valor para a propriedade
 * @returns o atributo com o seu novo valor
 */
var alterById = function (property, newValue) { return function (element) { return element[property] = newValue; }; };
/**
 * função que altera o valor da propriedade 'name' ou 'bio' do id passado
 * para alterar 'name': property = 'name'. para alterar 'bio': property = 'bio'
 * @param id id numérico do objeto que se deseja alterar
 * @param property nome da propriedade do objeto Scientist que se deseja alterar
 * @param newValue novo valor para a propriedade
 */
function updateById(id, property, newValue) {
    //faz uma busca do objeto pelo id, caso encontre altera o valor da propriedade 'nome' ou 'bio'
    lista2.filter(equalId(id)).map(alterById(property, newValue));
}
//realizando buscas para o id especificado
console.log(getName(3));
console.log(getBio(3));
//deletando o id especificado
lista2 = deleteById(3);
//testando se o id foi deletado
//espera-se a seguinte resposta: id não encontrado
console.log(getName(3));
//alterando as propriedades do id 1
updateById(1, 'name', 'Igor Gavilon');
updateById(1, 'bio', 'Desenvolvedor de Software');
//imprime a lista para verificar que os dados foram realmente alterados
console.log(lista2);
