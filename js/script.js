let alunos = [];

// Verifica se há dados salvos no localStorage
const alunosSalvos = JSON.parse(localStorage.getItem('alunos'));
if (alunosSalvos && Array.isArray(alunosSalvos)) {
    alunos = alunosSalvos;
} else {
    localStorage.setItem('alunos', JSON.stringify(alunos));
}

let tbody = document.querySelector('tbody');
let table = document.querySelector('table');

if(alunos.length !== 0){
    table.classList.add('tablee');
}

function created() {

    let nome = document.querySelector('#nome').value;
    let curso = document.querySelector('#curso').value;
    let ano = document.querySelector('#ano').value;
    let periodo = document.querySelector('#periodo').value;
    let especializacao = document.querySelector('#especializacao').value;

    table.classList.add('tablee');

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

    // Criar instância de Aluno antes de usá-la
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

    // Limpar os valores dos inputs

    location.reload();
}

function getCorAprovacao(aprovacao) {
    // Adapte isso conforme necessário com base nas suas condições
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
        <td class="infoAluno"><a href="aluno.html?index=${aluno.index}">ver mais</a></td>
    </tr>
    `;
}

// localStorage.clear();       

console.log(alunos);
