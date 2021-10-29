//definição do tipo de objeto que será utilizado em Array<Scientist>
interface Scientist {
    id: number
    name: string
    bio: string
}

//declaração do array de Objetos
let lista4 = new Array<Scientist>(
    {id : 1, name: "Ada Lovelace", 
        bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", 
        bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", 
        bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", 
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
);

//define o modo de visualização: mostrar somente a tabela
modoVisualizacao()
//renderizar a tabela
renderTable()

//função que monta a tabela em HTML a partir do Array lista4
function renderTable(): void {
    //cria uma tabela com os resgistros
    let html = "";
    html += "<h4>Listagem dos Registros</h4>";
    html += "<table border='1'>";
    html += "<tr><th scope='col'>ID</th><th scope='col'>Name</th><th scope='col'>Bio</th><th scope='col' colspan='2'>Ações</th></tr>";
    for(let i=0; i < lista4.length; i++)
    {
        
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

//função auxiliar utilizada na função filter
const notEqualId = (id: number) => (element: Scientist) => element.id != id;

//função que remove um dos registros da tabela
function removeRegistro(id: number): void {
    //array que armazenará o resultado do filtro
    let listResult = new Array<Scientist>();
    //filtra o array e retira somente o objeto com o id passado
    listResult = lista4.filter(notEqualId(id));
    //atualiza a variável lista2 após a exclusão do objeto
    lista4 = listResult;
    //renderiza a tabela com os dados da lista4 atualizados
    renderTable();
}

//função auxiliar que será utilizada na função filter()
const equalId = (id: number) => (element: Scientist) => element.id == id;

//função que prepara e mostra o formulário para edição dos dados do registro selecionado
function editarRegistro(id: number): void {
    //variável que armazena o registro selecionado pelo usuário
    let result = new Array();
    //filtra somente o registro de interesse
    result = lista4.filter(equalId(id));
    //preenche o formulário com os valores do registro selecionado
    document.getElementById('input_id').value = id;
    document.getElementById('input_name').value = result[0].name;
    document.getElementById('textarea_bio').value = result[0].bio;
    //entra em modo de edição
    modoEdicao();
}

//função que altera o valor de uma propriedade selecionada por parâmetro
//será utilizada pela função map()
const alterById = (property: string, newValue: string) => (element: Scientist) => element[property] = newValue;
//função que altera o valor da propriedade 'name' ou 'bio' do id passado
//para alterar 'name': property = 'name'. para alterar 'bio': property = 'bio'
function updateById(id: number, property: string, newValue: string): void {
    //faz uma busca do objeto pelo id, caso encontre altera o valor da propriedade 'nome' ou 'bio'
    lista4.filter(equalId(id)).map(alterById(property, newValue));
}

//função que realiza o update dos dados do formulário no Array lista4
function salvarEdicao(): void {
    //busca os dados que estão no formulário
    const id = document.getElementById('input_id').value;
    const name = document.getElementById('input_name').value;
    const bio = document.getElementById('textarea_bio').value;
    //chama a função que atualiza
    updateById(id, 'name', name);
    updateById(id, 'bio', bio);
    //volta para o modo edição
    modoVisualizacao();
    //renderiza a tabela com os dados atualizados
    renderTable();
}

//função que prepara a saída do modo de edição sem salvar as alterações
function cancelarEdicao(): void {
    modoVisualizacao();
}

//função que prepara para o modo de visulização: somente a tabela é mostrada
function modoVisualizacao(): void {
    document.getElementById('table').hidden = false;
    document.getElementById('formulario').hidden = true;
}

//função que prepara para o modo de edição: somente o formulário é mostrado
function modoEdicao(): void {
    document.getElementById('table').hidden = true;
    document.getElementById('formulario').hidden = false;
}

