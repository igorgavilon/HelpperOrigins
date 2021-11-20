import AnaliseNumericaFactory from "./AnaliseNumericaFactory";
import AnaliseNumericaImperativa from "./AnaliseNumericaImperativa";
import AnaliseNumerica from "./AnaliseNumerica";
import { EnumParadigmaProgramacao } from "./Tipos";

//testes
//lista com os elementos todos numéricos (number)
const listaEntrada1 = [10, -2, 33, 4, 5, 6, 0];
//instanciando um objeto que realiza as funções com o paradigma imperativo
//a Factory irá instanciar um objeto da classe AnaliseNumericaImperativa
//que é filha da classe AnaliseNumerica, por isso a variável pode ser tipada como está
let analiseImperativa: AnaliseNumerica = new AnaliseNumericaFactory(listaEntrada1, EnumParadigmaProgramacao.IMPERATIVO);
//retorna o valor máximo da lista numérica passada
console.log(analiseImperativa.calculaValorMaximo());
//instanciando um objeto que realiza as funções com o paradigma funcional
//a Factory irá instanciar um objeto da classe AnaliseNumericaFuncional
//que é filha da classe AnaliseNumerica, por isso a variável pode ser tipada como está
let analiseFuncional: AnaliseNumerica = new AnaliseNumericaFactory(listaEntrada1, EnumParadigmaProgramacao.FUNCIONAL);
//retorna um array com o seguinte formato [valor máximo, valor mínimo, valor médio]
//da lista numérica passada
console.log(analiseImperativa.realizaAnaliseCompleta());

//lista numérica onde nem todos os elementos são numéricos (number)
const listaEntrada2 = [10, -2, 33, true, 4, 5, 6, 0];
//a Factory retorna uma instancia da classe AnaliseNumericaFuncional
let analiseFuncional2: AnaliseNumerica = new AnaliseNumericaFactory(listaEntrada2, EnumParadigmaProgramacao.FUNCIONAL);
//deve retornar a seguinte mensagem: 'O Array deve ser numérico e não ser vazio.'
console.log(analiseFuncional2.realizaAnaliseCompleta());
