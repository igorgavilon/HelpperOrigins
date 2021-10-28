"use strict";
//definição do tipo de objeto que será utilizado em Array<Scientist>
var Scientist = /** @class */ (function () {
    function Scientist() {
    }
    return Scientist;
}());
//declaração do array de Objetos
var lista2 = new Array({ id: 1, name: "Ada Lovelace",
    bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" }, { id: 2, name: "Alan Turing",
    bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" }, { id: 3, name: "Nikola Tesla",
    bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." }, { id: 4, name: "Nicolau Copérnico",
    bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." });
//retorna true caso element.id == id passado para a função
//será utilizado na função filter()
var equalId = function (id) { return function (element) { return element.id == id; }; };
//função que retorna a bio do id passado
function getBio(id) {
    //array que armazenará o resultado do filtro
    var result = new Array();
    //filtra o objeto com id passado para essa função
    result = lista2.filter(equalId(id));
    //verifica se o filtro retornou algum objeto e retorna a bio
    //senão o id não foi encontrado
    return (result.length == 0 ? 'id não encontrado.' : result[0].bio);
}
//função que retorna o nome do id passado
function getName(id) {
    //array que armazenará o resultado do filtro
    var result = new Array();
    //filtra o objeto com id passado para essa função
    result = lista2.filter(equalId(id));
    //verifica se o filtro retornou algum objeto e retorna o name
    //senão o id não foi encontrado
    return (result.length == 0 ? 'id não encontrado.' : result[0].name);
}
//retorna true caso o element.id seja diferente do id passado para a função
//será utilizado na função filter()
var diferentId = function (id) { return function (element) { return element.id != id; }; };
//função que remove um objeto da lista pelo id
function deleteById(id) {
    //array que armazenará o resultado do filtro
    var listResult = new Array();
    //filtra o array e retira somente o objeto com o id passado
    listResult = lista2.filter(diferentId(id));
    //atualiza a variável lista2 após a exclusão do objeto
    lista2 = listResult;
}
//função que altera o valor de uma propriedade selecionada por parâmetro
//será utilizada pela função map()
var alterById = function (property, newValue) { return function (element) { return element[property] = newValue; }; };
//função que altera o valor da propriedade 'name' ou 'bio' do id passado
//para alterar 'name': property = 'name'. para alterar 'bio': property = 'bio'
function updateById(id, property, newValue) {
    //faz uma busca do objeto pelo id, caso encontre altera o valor da propriedade 'nome' ou 'bio'
    lista2.filter(equalId(id)).map(alterById(property, newValue));
}
//realizando buscas para o id especificado
console.log(getName(3));
console.log(getBio(3));
//deletando o id especificado
deleteById(3);
//testando se o id foi deletado
//espera-se a seguinte resposta: id não encontrado
console.log(getName(3));
//alterando as propriedades do id 1
updateById(1, 'name', 'Igor Gavilon');
updateById(1, 'bio', 'Desenvolvedor de Software');
//imprime a lista para verificar que os dados foram realmente alterados
console.log(lista2);
