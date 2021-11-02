"use strict";
/**
 * declaração do array de Objetos
 */
var lista = [
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
 * função que retorna a bio do id passado
 * @param id id numérico do objeto Scientist que deseja encontrar
 * @returns o atributo bio ou uma mensagem 'Nenhum id encontrado.'
 */
function getBio(id) {
    //define um padrão de resposta caso não encontre um id válido
    var response = 'Nenhum id encontrado.';
    //busca entre os elementos do Array um objeto com o id
    lista.forEach(function (element) {
        if (element.id == id) {
            //caso encontre, a response será a bio
            response = element.bio;
        }
    });
    return (response);
}
/**
 * função que retorna o nome do id passado
 * @param id id numérico do objeto Scientist que deseja encontrar
 * @returns o atributo name ou uma mensagem 'Nenhum id encontrado.'
 */
function getName(id) {
    //define um padrão de resposta caso não encontre um id válido
    var response = 'Nenhum id encontrado.';
    //busca entre os elementos do Array um objeto com o id
    lista.forEach(function (element) {
        if (element.id == id) {
            //caso encontre, a response será o name
            response = element.name;
        }
    });
    return (response);
}
/**
 * função que remove um objeto da lista pelo id
 * @param id id numérico do objeto Scientist que se deseja remover
 */
function deleteById(id) {
    //Array que guardará somente os objetos que não serão excluídos
    var temporaryList = [];
    //busca pelos objetos que não serão excluídos
    //e guarda em temporaryList
    lista.forEach(function (element) {
        if (element.id != id) {
            temporaryList.push(element);
        }
    });
    //atualiza a lista após a exclusão do objeto selecionado pelo id
    lista = temporaryList;
}
/**
 * função que altera o valor da propriedade 'name' ou 'bio' do id passado
 * para alterar 'name': property = 'name'. para alterar 'bio': property = 'bio'
 * @param id id numérico do objeto que se deseja alterar
 * @param property nome da propriedade do objeto Scientist que se deseja alterar
 * @param newValue novo valor para a propriedade
 * @returns mensagem do status da operação realizada ou falha, podendo ser:
 *          'Propriedade Name alterada.'
 *          'Propriedade Bio alterada.'
 *          'Nenhum id encontrado.'
 */
function updateById(id, property, newValue) {
    //resposta padrão caso não encontre um id válido
    var response = 'Nenhum id encontrado.';
    //busca pelo elemento que será alterado
    lista.forEach(function (element) {
        if (element.id == id) {
            //verifica qual propriedade deve ser alterada
            //previne que o usuário tente alterar uma propriedade que não existe
            if (property == 'name' || property == 'bio') {
                element[property] = newValue;
                response = "Propriedade \"" + property + "\" alterada.";
            }
            else {
                response = 'Propriedade não existente.';
            }
        }
    });
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
updateById(1, 'name', 'igor gavilon');
updateById(1, 'bio', 'desenvolvedor de software');
//imprime a lista para verificar que os dados foram realmente alterados
console.log(lista);
