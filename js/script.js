let alunos = [];


// Verifica se há dados salvos no localStorage
const alunosSalvos = JSON.parse(localStorage.getItem('alunos'));
if (alunosSalvos && Array.isArray(alunosSalvos)) {
    alunos = alunosSalvos;
    
    // Aguarde o DOMContentLoaded para garantir que a tabela esteja carregada
    document.addEventListener('DOMContentLoaded', function () {
        const tbody = document.querySelector('tbody');
        for (let i = 0; i < 4; i++) {
            tbody.removeChild(tbody.firstElementChild);
        }
    });
} else {
    // Se não houver dados salvos, inicialize alunos como um array vazio
    alunos = [];
    localStorage.setItem('alunos', JSON.stringify(alunos));
}

// Verifica se o localStorage está vazio
if (!alunosSalvos || !Array.isArray(alunosSalvos) || alunosSalvos.length === 0) {
    localStorage.clear();   
}

let tbody = document.querySelector('tbody');
let table = document.querySelector('table');


function created() {

    let nome = document.querySelector('#nome').value;
    let curso = document.querySelector('#curso').value;
    let ano = document.querySelector('#ano').value;
    let periodo = document.querySelector('#periodo').value;
    let especializacao = document.querySelector('#especializacao').value;

    let nota1 = parseInt(document.querySelector('#nota1').value);
    let nota2 = parseInt(document.querySelector('#nota2').value);
    let nota3 = parseInt(document.querySelector('#nota3').value);
    let nota4 = parseInt(document.querySelector('#nota4').value);

    let media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);

    let aprovacao = "";

    if (media >= 90) {
        aprovacao = "Aprovado";
    } else if (media >= 75 && media < 90) {
        aprovacao = "Aprovado";
    } else if (media >= 60 && media < 75) {
        aprovacao = "Recuperação";
    } else if (media >= 40 && media < 60) {
        aprovacao = "Reprovado";
    } else {
        aprovacao = "Reprovado";
    }

    const aluno1 = new Aluno(alunos.length, nome, curso, ano, periodo, especializacao, nota1, nota2, nota3, nota4, media, aprovacao);

    let situacaoElement = document.createElement('td');
    situacaoElement.setAttribute('class', 'nota');
    situacaoElement.textContent = aprovacao;

    if (aprovacao === "Aprovado") {
        situacaoElement.style.color = "green";
    } else if (aprovacao === "Reprovado") {
        situacaoElement.style.color = "red";
    } else if (aprovacao === "Recuperação") {
        situacaoElement.style.color = "rgb(255, 215, 0)";
    }
        
    alunos.push(aluno1);
    localStorage.setItem('alunos', JSON.stringify(alunos));

    location.reload();
}

function getCorAprovacao(aprovacao) {
    if (aprovacao === "Aprovado") {
        return "green";
    } else if (aprovacao === "Reprovado") {
        return "red";
    } else if (aprovacao === "Recuperação") {
        return "rgb(255, 215, 0)";
    }
    return "black"; // Cor padrão ou ajuste conforme necessário
}

for (const aluno of alunos) {
    tbody.innerHTML += `
    <tr>
        <td>${aluno.nome}</td>
        <td class="nota">${aluno.media}</td>
        <td class="situacao" style="color: ${getCorAprovacao(aluno.aprovacao)}">${aluno.aprovacao}</td>
        <td class="infoAluno"><a href="aluno.html?index=${aluno.id}">ver mais</a></td>
    </tr>
    `;
} 

function reset(){
    localStorage.clear();
    location.reload();
}

console.log(alunos);

