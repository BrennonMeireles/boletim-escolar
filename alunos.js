// Obtém a URL atual
var urlParams = new URLSearchParams(window.location.search);

// Obtém o valor do parâmetro "index"
var index = urlParams.get('index');

// Encontra o aluno com base no id igual ao valor do parâmetro "index"
var alunoSelecionado = alunos.find(function(aluno) {
    return aluno.id === parseInt(index); // Certifique-se de converter para número, se necessário
});

// Verifica se o aluno foi encontrado
if (alunoSelecionado) {
    console.log('Valor do parâmetro "index":', index);

    // Restante do código permanece o mesmo
    document.querySelector('.nome').textContent = alunoSelecionado.nome;
    document.querySelector('.curso').textContent = alunoSelecionado.curso;
    document.querySelector('.ano').textContent = alunoSelecionado.ano;
    document.querySelector('.periodo').textContent = alunoSelecionado.periodo;
    document.querySelector('.especializacao').textContent = alunoSelecionado.especializacao;
    document.querySelector('.nota1').textContent = alunoSelecionado.nota1;
    document.querySelector('.nota2').textContent = alunoSelecionado.nota2;
    document.querySelector('.nota3').textContent = alunoSelecionado.nota3;
    document.querySelector('.nota4').textContent = alunoSelecionado.nota4;
    document.querySelector('.media').textContent = alunoSelecionado.media;
    document.querySelector('.situacaoo').textContent = alunoSelecionado.aprovacao;

    // Função deleted agora deve ser chamada com o objeto alunoSelecionado
    function deleted() {
        // Encontra o índice do aluno no array
        var alunoIndex = alunos.indexOf(alunoSelecionado);
        
        // Remover o aluno do array pelo índice
        alunos.splice(alunoIndex, 1);

        // Atualizar o localStorage
        localStorage.setItem('alunos', JSON.stringify(alunos));

        // Redirecionar de volta para a página inicial
        window.location.href = 'index.html';
    }
} else {
    console.error('Aluno não encontrado com o ID:', index);
}
    