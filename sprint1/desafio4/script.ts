/**
 * definição do tipo de objeto que será utilizado em Array<Scientist>
 */
interface Scientist {
    id: number
    name: string
    bio: string
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
 * define o modo de visualização: mostrar somente a tabela
 */
modoVisualizacao()
/**
 * renderizar a tabela
 */
gerarTabela()

/**
 * função que gera o cabeçalho da tabela
 * @param tabela referencia da tabela HTML
 * @param rotulos rótulos dos dados da tabela
 */
function gerarCabecalhoTabela(tabela: HTMLTableElement, rotulos: string[]): void {
    let thead: HTMLTableSectionElement = tabela.createTHead();
    let row: HTMLTableRowElement = thead.insertRow();
    for (let chave of rotulos) {
      let th: HTMLTableCellElement = document.createElement("th");
      let text: Text = document.createTextNode(chave);
      th.appendChild(text);
      row.appendChild(th);
    }

    //criando a coluna ações: editar e excluir
    let th: HTMLTableCellElement = document.createElement("th");
    let text: Text = document.createTextNode('ações');
    th.setAttribute("colSpan", "2");
    th.appendChild(text);
    row.appendChild(th);
    tabela.setAttribute("border", "2");
}

/**
 * função que gera as linhas da tabela e preenche com os dados
 * @param tabela refrencia da tabela HTML
 * @param dados array com os dados que serão mostrados na tabela
 */
function gerarLinhasTabela(tabela: HTMLTableElement, dados: Array<Scientist>): void {
    for (let elemento of dados) {
        let row: HTMLTableRowElement = tabela.insertRow();
        for (let chave in elemento) {
            let cell: HTMLTableCellElement = row.insertCell();
            let text: Text = document.createTextNode(elemento[chave]);
            cell.appendChild(text);
        }

        //inserir as ações editar e excluir
        let cell: HTMLTableCellElement = row.insertCell();
        let link: HTMLAnchorElement = document.createElement('a');
        let text: Text = document.createTextNode('editar');
        link.appendChild(text);
        link.setAttribute("href", "#");
        link.setAttribute("onClick",`editarRegistro(${elemento.id})` );
        cell.appendChild(link);
        let cell: HTMLTableCellElement = row.insertCell();
        let link: HTMLAnchorElement = document.createElement('a');
        let text: Text = document.createTextNode('excluir');
        link.appendChild(text);
        link.setAttribute("href", "#");
        link.setAttribute("onClick",`removeRegistro(${elemento.id})` );
        cell.appendChild(link);
    }
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
    document.querySelectorAll("table tr").forEach(e => {
        e.remove()
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
const alteraPropriedade = (property: string, newValue: string) => (element: Scientist) => element[property] = newValue;

/**
 * função que altera o valor da propriedade 'name' ou 'bio' do id passado
 * para alterar 'name': property = 'name'. para alterar 'bio': property = 'bio'
 * @param id id numérico do objeto que se deseja alterar
 * @param property nome da propriedade do objeto Scientist que se deseja alterar
 * @param newValue novo valor para a propriedade
 */
function alteraPropriedadePeloId(id: number, property: string, newValue: string): void {
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
    //chama a função que atualiza
    alteraPropriedadePeloId(id, 'name', name);
    alteraPropriedadePeloId(id, 'bio', bio);
    //volta para o modo edição
    modoVisualizacao();
    
    //renderiza a tabela com os dados da lista4 atualizados
    atualizarTabela();
}

/**
 * função que prepara a saída do modo de edição sem salvar as alterações
 */
function cancelarEdicao(): void {
    modoVisualizacao();
}

/**
 * função que prepara para o modo de visulização: somente a tabela é mostrada
 */
function modoVisualizacao(): void {
    document.getElementById('table').hidden = false;
    document.getElementById('formulario').hidden = true;
}

/**
 * função que prepara para o modo de edição: somente o formulário é mostrado
 */
function modoEdicao(): void {
    document.getElementById('table').hidden = true;
    document.getElementById('formulario').hidden = false;
}