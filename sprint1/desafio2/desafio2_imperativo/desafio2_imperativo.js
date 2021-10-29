"use strict";
//declaração do array de Objetos
var lista = new Array({ id: 1, name: "Ada Lovelace",
    bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" }, { id: 2, name: "Alan Turing",
    bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" }, { id: 3, name: "Nikola Tesla",
    bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." }, { id: 4, name: "Nicolau Copérnico",
    bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." });
//função que retorna a bio do id passado
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
//função que retorna o nome do id passado
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
//função que remove um objeto da lista pelo id
function deleteById(id) {
    //Array que guardará somente os objetos que não serão excluídos
    var temporaryList = new Array();
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
//função que altera o valor da propriedade 'name' ou 'bio' do id passado
//para alterar 'name': property = 'name'. para alterar 'bio': property = 'bio'
function updateById(id, property, newValue) {
    //resposta padrão caso não encontre um id válido
    var response = 'Nenhum id encontrado.';
    //busca pelo elemento que será alterado
    lista.forEach(function (element) {
        if (element.id == id) {
            //verifica qual propriedade deve ser alterada
            if (property == 'name') {
                element.name = newValue;
                response = 'Propriedade Name alterada.';
            }
            else if (property == 'bio') {
                element.bio = newValue;
                response = 'Propriedade Bio alterada.';
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
