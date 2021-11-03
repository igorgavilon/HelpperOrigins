/**
 * definição do tipo de objeto que será utilizado em Array<Scientist>
 */
interface Scientist {
    id: number
    name: string
    bio: string
}

/**
 * variável que armazena os modos que o usuário pode interagir
 */
enum EnumModo {
    edicao = "edicao",
    visualizacao = "visualizacao"
}

/**
 * enum que contém as propriedades do objeto que podem ser alteradas
 */
enum EnumPropriedadesPessoa {
    name = "name",
    bio = "bio"
}

/**
 * declaração do array de Objetos
 */
let lista4: Array<Scientist> = [
    {id : 1, name: "Ada Lovelace", 
        bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", 
        bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", 
        bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", 
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

/**
 * variável que armazena a referência da tabela do HTML
 */
let tabelaHTML: HTMLTableElement = document.querySelector("table");
/**
 * variável que armazena os rótulos dos dados da tabela
 */
let rotulosTabela: string[] = Object.keys(lista4[0]);

/**
 * função que realiza a configuração inicial quando a página é carregada: HTML onload()
 */
function configuracaoInicial(): void {
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
function gerarCabecalhoTabela(tabela: HTMLTableElement, rotulos: string[]): void {
    let cabecalhoTabela: HTMLTableSectionElement = tabela.createTHead();
    let linha: HTMLTableRowElement = cabecalhoTabela.insertRow();
    for (let chave of rotulos) {
      let elemento_th: HTMLTableCellElement = document.createElement("th");
      let texto: Text = document.createTextNode(chave);
      elemento_th.appendChild(texto);
      linha.appendChild(elemento_th);
    }

    //criando a coluna ações: editar e excluir
    let elemento_th: HTMLTableCellElement = document.createElement("th");
    let texto: Text = document.createTextNode('ações');
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
function gerarLinhasTabela(tabela: HTMLTableElement, dados: Array<Scientist>): void {
    for (let elemento of dados) {
        let linha: HTMLTableRowElement = tabela.insertRow();
        for (let chave in elemento) {
            let celula: HTMLTableCellElement = linha.insertCell();
            let texto: Text = document.createTextNode(elemento[chave]);
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
function gerarAcoesDeUsuario(linha: HTMLTableRowElement, elemento: Scientist): void {
    //inserir as ações editar e excluir
    let celula: HTMLTableCellElement = linha.insertCell();
    let elemento_a: HTMLAnchorElement = document.createElement('a');
    let texto: Text = document.createTextNode('editar');
    elemento_a.appendChild(texto);
    elemento_a.setAttribute("href", "#");
    elemento_a.setAttribute("onClick",`editarRegistro(${elemento.id})` );
    celula.appendChild(elemento_a);
    let celula: HTMLTableCellElement = linha.insertCell();
    let elemento_a: HTMLAnchorElement = document.createElement('a');
    let texto: Text = document.createTextNode('excluir');
    elemento_a.appendChild(texto);
    elemento_a.setAttribute("href", "#");
    elemento_a.setAttribute("onClick",`removeRegistro(${elemento.id})` );
    celula.appendChild(elemento_a);
}

/**
 * função que monta a tabela em HTML a partir do Array lista4
 */
function gerarTabela(): void {
    //gera o cabeçalho e as linhas da tabela
    gerarCabecalhoTabela(tabelaHTML, rotulosTabela);
    gerarLinhasTabela(tabelaHTML, lista4);
}

/**
 * função que atualiza os dados da tabela
 */
function atualizarTabela(): void {
    //remove todas as linhas da tabela
    limparTabela();
    //gera as linhas da tabela com os dados atualizados do array lista4
    gerarTabela();
}

/**
 * função que limpa todas as linhas da tabela
 */
function limparTabela(): void {
    //remover todas as linhas da tabela da tabela
    tabelaHTML.querySelectorAll("tr").forEach(elemento => {
        elemento.remove()
    });
}

/**
 * função que verifica se dois id são diferentes
 * @param id id numérico que se deseja verificar
 * @returns true ou false, caso o id do elemento do array 
 *          seja diferente ao parametro id ou não, respectivamente
 */
const diferenteId = (id: number) => (element: Scientist) => element.id != id;

/**
 * função que remove um dos registros da tabela
 * @param id id numérico do objeto Scientist que se deseja remover da tabela
 */
function removeRegistro(id: number): void {
    //array que armazenará o resultado do filtro
    let listResult: Array<Scientist> = [];
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
const igualId = (id: number) => (element: Scientist) => element.id == id;

/**
 * função que prepara e mostra o formulário 
 * para edição dos dados do registro da tabela selecionado
 * @param id id numérico do objeto Scientist que deseja editar
 */
function editarRegistro(id: number): void {
    //variável que armazena o registro selecionado pelo usuário
    let result: Array<Scientist> = [];
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
const alteraPropriedade = (property: EnumPropriedadesPessoa, newValue: string) => (element: Scientist) => element[property] = newValue;

/**
 * função que altera o valor da propriedade 'name' ou 'bio' do id passado
 * para alterar 'name': EnumPropriedadesPessoa.name. para alterar EnumPropriedadesPessoa.bio
 * @param id id numérico do objeto que se deseja alterar
 * @param property nome da propriedade do objeto Scientist que se deseja alterar
 * @param newValue novo valor para a propriedade
 */
function alteraPropriedadePeloId(id: number, property: EnumPropriedadesPessoa, newValue: string): void {
    //faz uma busca do objeto pelo id, caso encontre altera o valor da propriedade 'nome' ou 'bio'
    lista4.filter(igualId(id)).map(alteraPropriedade(property, newValue));
}

/**
 * função que realiza o update dos dados do formulário no Array lista4
 */
function salvarEdicao(): void {
    //busca os dados que estão no formulário
    const id: number = document.getElementById('input_id').value;
    const name: string = document.getElementById('input_name').value;
    const bio: string = document.getElementById('textarea_bio').value;
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
function cancelarEdicao(): void {
    //volta para o modo visualização
    definirModo(EnumModo.visualizacao);
}

/**
 * função que define o modo que o usuário terá acesso
 * @param modo enum type: modo que o usuário terá acesso: edição ou visualização dos dados
 */
function definirModo(modo: EnumModo): void {
    document.getElementById('table').hidden = (modo === "edicao");
    document.getElementById('formulario').hidden = (modo === "visualizacao");
}