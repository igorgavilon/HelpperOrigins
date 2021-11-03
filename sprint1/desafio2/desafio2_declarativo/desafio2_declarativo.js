"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//enum que contém as propriedades que podem ser alteradas no objeto Scientist
var objectProperties;
(function (objectProperties) {
    objectProperties["name"] = "name";
    objectProperties["bio"] = "bio";
})(objectProperties || (objectProperties = {}));
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
var equalId = function (id) { return function (element) { return element.id === id; }; };
/**
 *
 * @param list lista de objetos Scientist
 * @param id id do objeto que deseja encontrar
 * @returns array com o objeto cujo id foi informado ou []
 */
var findById = function (list, id) { return list.filter(equalId(id)); };
/**
 * função que retorna a bio do id passado
 * @param list lista com os objetos Scientist
 * @param id id numérico do objeto Scientist que deseja encontrar
 * @returns o atributo bio ou uma mensagem 'id não encontrado.'
 */
function getBio(list, id) {
    //array que armazenará o resultado do filtro
    var result = [];
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
function getName(list, id) {
    //array que armazenará o resultado do filtro
    var result = [];
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
var diferentId = function (id) { return function (element) { return element.id != id; }; };
/**
 * função que remove um objeto da lista pelo id
 * @param list lista com os objetos Scientist
 * @param id id numérico do objeto Scientist que se deseja remover
 * @returns array do tipo Scientist com os elementos que não foram removidos
 */
function deleteById(list, id) {
    //filtra o array e retira somente o objeto com o id passado
    return list.filter(diferentId(id));
}
/**
 * função que altera o valor de uma propriedade selecionada por parâmetro
 * para alterar 'name': property = 'name'. para alterar 'bio': property = 'bio'
 * @param property enum type: nome da propriedade do objeto Scientist que se deseja alterar
 * @param newValue novo valor para a propriedade
 * @returns o atributo com o seu novo valor
 */
var alterProperty = function (property, newValue) { return function (element) { return element[property] = newValue; }; };
/**
 * função que altera a propriedade "name" ou "bio" do objeto selecionado pelo id
 * @param list lista com os objetos Scientist
 * @param id id numérico do objeto que se deseja alterar
 * @param property nome da propriedade do objeto Scientist que se deseja alterar
 * @param newValue novo valor para a propriedade
 * @returns array do tipo Scientist contendo o item que foi atualizado
 */
function updateById(list, id, property, newValue) {
    //array de cópia do array de entrada, list
    //retirando a referência de memória com: list.map((element: Scientist) => ({...element}))
    //garantindo a imutabilidade do parâmetro passaddo lista2
    var auxiliarList = list.map(function (element) { return (__assign({}, element)); });
    //faz uma busca do objeto pelo id, caso encontre altera o valor da propriedade 'nome' ou 'bio'
    findById(auxiliarList, id).map(alterProperty(property, newValue));
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
console.log(updateById(lista2, 1, objectProperties.name, 'Igor Gavilon'));
console.log(updateById(lista2, 1, objectProperties.bio, 'Desenvolvedor de Software.'));
//imprime a lista original para verificar que os dados não foram alterados
console.log(lista2);
