"use strict";
/**
 * declaração do array de Objetos
 */
var lista4 = [
    { id: 1, name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { id: 3, name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
//define o modo de visualização: mostrar somente a tabela
modoVisualizacao();
//renderizar a tabela
gerarTabela();
/**
 * função que monta a tabela em HTML a partir do Array lista4
 */
function gerarTabela() {
    //cria uma tabela com os resgistros
    var html = "";
    html += "<h4>Listagem dos Registros</h4>";
    html += "<table border='1'>";
    html += "<tr><th scope='col'>ID</th><th scope='col'>Name</th><th scope='col'>Bio</th><th scope='col' colspan='2'>Ações</th></tr>";
    for (var i = 0; i < lista4.length; i++) {
        html += "<tr>";
        html += "<td id='id" + lista4[i].id + "'>" + lista4[i].id + "</td>";
        html += "<td id='name" + lista4[i].id + "'>" + lista4[i].name + "</td>";
        html += "<td id='bio" + lista4[i].id + "'>" + lista4[i].bio + "</td>";
        html += "<td><a id='editar' href='#' onClick='editarRegistro(" + lista4[i].id + ")' >editar</a></td>";
        html += "<td><a id='excluir' href='#' onClick='removeRegistro(" + lista4[i].id + ")' >excluir</a></td>";
        html += "</tr>";
    }
    html += "</table>";
    //coloca o innerHTML dentro da div#table
    document.getElementById('table').innerHTML = html;
}
/**
 * função que verifica se dois id são diferentes
 * @param id id numérico que se deseja verificar
 * @returns true ou false, caso o id do elemento do array
 *          seja diferente ao parametro id ou não, respectivamente
 */
var diferenteId = function (id) { return function (element) { return element.id != id; }; };
/**
 * função que remove um dos registros da tabela
 * @param id id numérico do objeto Scientist que se deseja remover da tabela
 */
function removeRegistro(id) {
    //array que armazenará o resultado do filtro
    var listResult = [];
    //filtra o array e retira somente o objeto com o id passado
    listResult = lista4.filter(diferenteId(id));
    //atualiza a variável lista2 após a exclusão do objeto
    lista4 = listResult;
    //renderiza a tabela com os dados da lista4 atualizados
    gerarTabela();
}
/**
 * função que verifica se dois id são iguais
 * @param id id numérico que se deseja verificar
 * @returns true ou false, caso o id do elemento do array
 *          seja igual ao parametro id ou não, respectivamente
 */
var igualId = function (id) { return function (element) { return element.id == id; }; };
/**
 * função que prepara e mostra o formulário
 * para edição dos dados do registro da tabela selecionado
 * @param id id numérico do objeto Scientist que deseja editar
 */
function editarRegistro(id) {
    //variável que armazena o registro selecionado pelo usuário
    var result = [];
    //filtra somente o registro de interesse
    result = lista4.filter(igualId(id));
    //preenche o formulário com os valores do registro selecionado
    document.getElementById('input_id').value = id;
    document.getElementById('input_name').value = result[0].name;
    document.getElementById('textarea_bio').value = result[0].bio;
    //entra em modo de edição
    modoEdicao();
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
    lista4.filter(equalId(id)).map(alterById(property, newValue));
}
/**
 * função que realiza o update dos dados do formulário no Array lista4
 */
function salvarEdicao() {
    //busca os dados que estão no formulário
    var id = document.getElementById('input_id').value;
    var name = document.getElementById('input_name').value;
    var bio = document.getElementById('textarea_bio').value;
    //chama a função que atualiza
    updateById(id, 'name', name);
    updateById(id, 'bio', bio);
    //volta para o modo edição
    modoVisualizacao();
    //renderiza a tabela com os dados atualizados
    gerarTabela();
}
/**
 * função que prepara a saída do modo de edição sem salvar as alterações
 */
function cancelarEdicao() {
    modoVisualizacao();
}
/**
 * função que prepara para o modo de visulização: somente a tabela é mostrada
 */
function modoVisualizacao() {
    document.getElementById('table').hidden = false;
    document.getElementById('formulario').hidden = true;
}
/**
 * função que prepara para o modo de edição: somente o formulário é mostrado
 */
function modoEdicao() {
    document.getElementById('table').hidden = true;
    document.getElementById('formulario').hidden = false;
}
