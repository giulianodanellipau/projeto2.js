let alunos = [];
let alunosMelhores = [];

//Cadastro
document.getElementById("btnCadastrar").addEventListener("click", cadastrarAluno);

//Filtros
document.getElementById("btnFiltrarNome").addEventListener("click", filtrarNome);
document.getElementById("btnFiltrarMedia").addEventListener("click", filtrarMedia);
document.getElementById("btnFiltrarCincoMelhores").addEventListener("click", filtrarMelhores);

function cadastrarAluno() {
    let nome = document.getElementById("nomeAluno").value;
    let notaUm = Number(document.getElementById("notaUm").value);
    let notaDois = Number(document.getElementById("notaDois").value);
    let media = ((notaUm + notaDois) / 2);
    let situacao = "";

    //Validações
    if (nome === "" || notaUm === "" || notaDois === "") {
        alert("Preencha todos os campos!!!");
        return;
    }

    if (notaUm > 10 || notaUm < 0 || notaDois > 10 || notaDois < 0) {
        alert("Digite uma nota de 1 a 10 apenas!!!");
        return;
    }

    //Situação do aluno
    if (media <= 7) {
        situacao = "❌ Reprovado(a)"
    } else {
        situacao = "✅ Aprovado(a)"
    }

    //Objeto aluno para array
    let aluno = {
        nome: nome,
        notaUm: notaUm,
        notaDois: notaDois,
        media: media,
        situacao: situacao
    }

    alunos.push(aluno);
    limparCampos();
    exibirAlunos(alunos);

    //Array para alunos nota 10
    if (aluno.media == 10){
        alunosMelhores.push(aluno);
    }

}

//Exibir
function exibirAlunos(lista) {
    let texto = lista.map(f => `| Nome: ${f.nome} | Notas: (${f.notaUm}, ${f.notaDois}) | Média: ${f.media} | Situação: ${f.situacao}`
    ).join("<br>");
    document.getElementById("listaAlunos").innerHTML = texto;
}

function exibirMelhoresAlunos(lista) {
    let texto = lista.map(f => `| Nome: ${f.nome} | Notas: (${f.notaUm}, ${f.notaDois}) | Média: ${f.media} | Situação: ${f.situacao}`
    ).join("<br>");
    document.getElementById("listaAlunosMelhores").innerHTML = texto;
}

//Filtros
function filtrarNome() {
    let filtroNome = document.getElementById("filtroNome").value;
    let resultado = alunos.filter(f => f.nome === filtroNome);
    exibirAlunos(resultado);
}

function filtrarMedia() {
    let filtroMedia = document.getElementById("filtroMedia").value;
    let resultado = alunos.filter(f => f.media == filtroMedia);
    exibirAlunos(resultado);
}

function filtrarMelhores() {
    if(alunosMelhores.length > 5){
        alert("Limite máximo alcançado.")
    }else{
        exibirMelhoresAlunos(alunosMelhores)
    }
}

//Limpar
function limparCampos() {
    document.getElementById("nomeAluno").value = "";
    document.getElementById("notaUm").value = "";
    document.getElementById("notaDois").value = "";
}