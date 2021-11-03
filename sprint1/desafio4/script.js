"use strict";
/**
 * variável que armazena os modos que o usuário pode interagir
 */
var EnumModo;
(function (EnumModo) {
    EnumModo["edicao"] = "edicao";
    EnumModo["visualizacao"] = "visualizacao";
})(EnumModo || (EnumModo = {}));
/**
 * enum que contém as propriedades do objeto que podem ser alteradas
 */
var EnumPropriedadesPessoa;
(function (EnumPropriedadesPessoa) {
    EnumPropriedadesPessoa["name"] = "name";
    EnumPropriedadesPessoa["bio"] = "bio";
})(EnumPropriedadesPessoa || (EnumPropriedadesPessoa = {}));
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
/**
 * variável que armazena a referência da tabela do HTML
 */
var tabelaHTML = document.querySelector("table");
/**
 * variável que armazena os rótulos dos dados da tabela
 */
var rotulosTabela = Object.keys(lista4[0]);
/**
 * função que realiza a configuração inicial quando a página é carregada: HTML onload()
 */
function configuracaoInicial() {
    /**
     * define o modo de visualização: mostrar somente a tabela
     */
    definirModo(EnumModo.visualizacao);
    /**
     * renderizar a tabela
     */
    gerarTabela();
}
/**
 * função que gera o cabeçalho da tabela
 * @param tabela referencia da tabela HTML
 * @param rotulos rótulos dos dados da tabela
 */
function gerarCabecalhoTabela(tabela, rotulos) {
    var cabecalhoTabela = tabela.createTHead();
    var linha = cabecalhoTabela.insertRow();
    for (var _i = 0, rotulos_1 = rotulos; _i < rotulos_1.length; _i++) {
        var chave = rotulos_1[_i];
        var elemento_th_1 = document.createElement("th");
        var texto_1 = document.createTextNode(chave);
        elemento_th_1.appendChild(texto_1);
        linha.appendChild(elemento_th_1);
    }
    //criando a coluna ações: editar e excluir
    var elemento_th = document.createElement("th");
    var texto = document.createTextNode('ações');
    elemento_th.setAttribute("colSpan", "2");
    elemento_th.appendChild(texto);
    linha.appendChild(elemento_th);
    tabela.setAttribute("border", "2");
}
/**
 * função que gera as linhas da tabela e preenche com os dados
 * @param tabela refrencia da tabela HTML
 * @param dados array com os dados que serão mostrados na tabela
 */
function gerarLinhasTabela(tabela, dados) {
    for (var _i = 0, dados_1 = dados; _i < dados_1.length; _i++) {
        var elemento = dados_1[_i];
        var linha = tabela.insertRow();
        for (var chave in elemento) {
            var celula = linha.insertCell();
            var texto = document.createTextNode(elemento[chave]);
            celula.appendChild(texto);
        }
        gerarAcoesDeUsuario(linha, elemento);
    }
}
/**
 * função que adiciona dois links com ações que o usuário pode realizar: editar e excluir registro
 * @param linha linha atual da tabela
 * @param elemento objeto com os dados para preeencher a linha atual da tabela
 */
function gerarAcoesDeUsuario(linha, elemento) {
    //inserir as ações editar e excluir
    var celula = linha.insertCell();
    var elemento_a = document.createElement('a');
    var texto = document.createTextNode('editar');
    elemento_a.appendChild(texto);
    elemento_a.setAttribute("href", "#");
    elemento_a.setAttribute("onClick", "editarRegistro(" + elemento.id + ")");
    celula.appendChild(elemento_a);
    var celula = linha.insertCell();
    var elemento_a = document.createElement('a');
    var texto = document.createTextNode('excluir');
    elemento_a.appendChild(texto);
    elemento_a.setAttribute("href", "#");
    elemento_a.setAttribute("onClick", "removeRegistro(" + elemento.id + ")");
    celula.appendChild(elemento_a);
}
/**
 * função que monta a tabela em HTML a partir do Array lista4
 */
function gerarTabela() {
    //gera o cabeçalho e as linhas da tabela
    gerarCabecalhoTabela(tabelaHTML, rotulosTabela);
    gerarLinhasTabela(tabelaHTML, lista4);
}
/**
 * função que atualiza os dados da tabela
 */
function atualizarTabela() {
    //remove todas as linhas da tabela
    limparTabela();
    //gera as linhas da tabela com os dados atualizados do array lista4
    gerarTabela();
}
/**
 * função que limpa todas as linhas da tabela
 */
function limparTabela() {
    //remover todas as linhas da tabela da tabela
    tabelaHTML.querySelectorAll("tr").forEach(function (elemento) {
        elemento.remove();
    });
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
    atualizarTabela();
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
    //entra em modo de edição: mostra o formulário e esconde a tabela
    definirModo(EnumModo.edicao);
}
/**
 * função que altera o valor de uma propriedade selecionada por parâmetro
 * para alterar 'name': EnumPropriedadesPessoa.name. para alterar EnumPropriedadesPessoa.bio
 * @param property nome da propriedade do objeto Scientist que se deseja alterar
 * @param newValue novo valor para a propriedade
 * @returns o atributo com o seu novo valor
 */
var alteraPropriedade = function (property, newValue) { return function (element) { return element[property] = newValue; }; };
/**
 * função que altera o valor da propriedade 'name' ou 'bio' do id passado
 * para alterar 'name': EnumPropriedadesPessoa.name. para alterar EnumPropriedadesPessoa.bio
 * @param id id numérico do objeto que se deseja alterar
 * @param property nome da propriedade do objeto Scientist que se deseja alterar
 * @param newValue novo valor para a propriedade
 */
function alteraPropriedadePeloId(id, property, newValue) {
    //faz uma busca do objeto pelo id, caso encontre altera o valor da propriedade 'nome' ou 'bio'
    lista4.filter(igualId(id)).map(alteraPropriedade(property, newValue));
}
/**
 * função que realiza o update dos dados do formulário no Array lista4
 */
function salvarEdicao() {
    //busca os dados que estão no formulário
    var id = document.getElementById('input_id').value;
    var name = document.getElementById('input_name').value;
    var bio = document.getElementById('textarea_bio').value;
    //chama a função que atualiza a propriedade do objeto alterado
    alteraPropriedadePeloId(id, EnumPropriedadesPessoa.name, name);
    alteraPropriedadePeloId(id, EnumPropriedadesPessoa.bio, bio);
    //volta para o modo visualização
    definirModo(EnumModo.visualizacao);
    //renderiza a tabela com os dados da lista4 atualizados
    atualizarTabela();
}
/**
 * função que prepara a saída do modo de edição sem salvar as alterações
 */
function cancelarEdicao() {
    //volta para o modo visualização
    definirModo(EnumModo.visualizacao);
}
/**
 * função que define o modo que o usuário terá acesso
 * @param modo enum type: modo que o usuário terá acesso: edição ou visualização dos dados
 */
function definirModo(modo) {
    document.getElementById('table').hidden = (modo === "edicao");
    document.getElementById('formulario').hidden = (modo === "visualizacao");
}
