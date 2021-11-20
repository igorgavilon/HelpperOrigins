"use strict";
exports.__esModule = true;
var AnaliseNumericaFactory_1 = require("./AnaliseNumericaFactory");
var Tipos_1 = require("./Tipos");
//testes
//lista com os elementos todos numéricos (number)
var listaEntrada1 = [10, -2, 33, 4, 5, 6, 0];
//instanciando um objeto que realiza as funções com o paradigma imperativo
//a Factory irá instanciar um objeto da classe AnaliseNumericaImperativa
//que é filha da classe AnaliseNumerica, por isso a variável pode ser tipada como está
var analiseImperativa = new AnaliseNumericaFactory_1["default"](listaEntrada1, Tipos_1.EnumParadigmaProgramacao.IMPERATIVO);
//retorna o valor máximo da lista numérica passada
console.log(analiseImperativa.calculaValorMaximo());
//instanciando um objeto que realiza as funções com o paradigma funcional
//a Factory irá instanciar um objeto da classe AnaliseNumericaFuncional
//que é filha da classe AnaliseNumerica, por isso a variável pode ser tipada como está
var analiseFuncional = new AnaliseNumericaFactory_1["default"](listaEntrada1, Tipos_1.EnumParadigmaProgramacao.FUNCIONAL);
//retorna um array com o seguinte formato [valor máximo, valor mínimo, valor médio]
//da lista numérica passada
console.log(analiseImperativa.realizaAnaliseCompleta());
//lista numérica onde nem todos os elementos são numéricos (number)
var listaEntrada2 = [10, -2, 33, true, 4, 5, 6, 0];
//a Factory retorna uma instancia da classe AnaliseNumericaFuncional
var analiseFuncional2 = new AnaliseNumericaFactory_1["default"](listaEntrada2, Tipos_1.EnumParadigmaProgramacao.FUNCIONAL);
//deve retornar a seguinte mensagem: 'O Array deve ser numérico e não ser vazio.'
console.log(analiseFuncional2.realizaAnaliseCompleta());
