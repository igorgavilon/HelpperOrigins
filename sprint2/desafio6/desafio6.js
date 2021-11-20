"use strict";
exports.__esModule = true;
var CientistaFuncional_1 = require("./CientistaFuncional");
var CientistaImperativo_1 = require("./CientistaImperativo");
var Tipos_1 = require("./Tipos");
/**
* declaração do array de Objetos do tipo Cientista
*/
var arrayCientistas = [
    { id: 1, name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { id: 3, name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
//instanciando um objeto da classe CientistaFuncional
var exemploFuncional = new CientistaFuncional_1["default"](arrayCientistas);
//busca um nome pelo id
var nome = exemploFuncional.mostraNomePeloId(1);
console.log(nome);
//busca um nome de um id que não existe
//mensagem esperada: Nenhum id encontrado.
nome = exemploFuncional.mostraNomePeloId(10);
console.log(nome);
//remove um item do array
var listaComItemRemovido = exemploFuncional.deletaCientistaPeloId(2);
console.log(listaComItemRemovido);
//altera a propriedade name de um objeto
var listaComItemAlterado = exemploFuncional.alteraPropriedadePeloId(3, Tipos_1.EnumPropriedadesCientista.BIO, "Aluno Bootcamp Helppers.");
console.log(listaComItemAlterado);
//instanciando um objeto da classe CientistaImperativo
var exemploImperativo = new CientistaImperativo_1["default"](arrayCientistas);
//busca um nome pelo id
nome = exemploImperativo.mostraNomePeloId(1);
console.log(nome);
//busca um nome de um id que não existe
//mensagem esperada: Nenhum id encontrado.
nome = exemploImperativo.mostraNomePeloId(10);
console.log(nome);
//altera a propriedade name de um objeto
var resposta = exemploImperativo.alteraPropriedadePeloId(3, Tipos_1.EnumPropriedadesCientista.NOME, "Igor Gavilon");
console.log(resposta);
//verifica se alterou a propriedade
nome = exemploImperativo.mostraNomePeloId(3);
console.log(nome);
