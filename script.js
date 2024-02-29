

let alunos = [];

function created() {
    let nome = document.querySelector('#nome').value;
    let curso = document.querySelector('#curso').value;
    let ano = document.querySelector('#ano').value;
    let periodo = document.querySelector('#periodo').value;
    let especializacao = document.querySelector('#especializacao').value;
    let tbody = document.querySelector('tbody');
    let table = document.querySelector('table');

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

    tbody.innerHTML += `
        <tr>
            <td>${nome}</td>
            <td class="nota">${media}</td>
            <td class="situacao" style="color: ${situacaoElement.style.color}">${aprovacao}</td>
            <td class="infoAluno"><a href="aluno.html">ver mais</a></td>
        </tr>
    `;

    const aluno1 = new Aluno(nome, curso, ano, periodo, especializacao, media);
    alunos.push(aluno1);


    // Limpar os valores dos inputs
    document.querySelector('#nome').value = '';
    document.querySelector('#curso').value = '';
    document.querySelector('#ano').value = '';
    document.querySelector('#periodo').value = '';
    document.querySelector('#especializacao').value = '';
    document.querySelector('#nota1').value = '';
    document.querySelector('#nota2').value = '';
    document.querySelector('#nota3').value = '';
    document.querySelector('#nota4').value = '';

    console.log(alunos)
}
