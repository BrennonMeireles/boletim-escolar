    // Obtém a URL atual
    var urlParams = new URLSearchParams(window.location.search);

    // Obtém o valor do parâmetro "index"
    var index = urlParams.get('index');

    // Exibe o valor do parâmetro na console (você pode fazer o que quiser com ele)
    console.log('Valor do parâmetro "index":', index);

    console.log(alunos[index])

    document.querySelector('.nome').textContent = alunos[index].nome;
    document.querySelector('.curso').textContent = alunos[index].curso
    document.querySelector('.ano').textContent = alunos[index].ano
    document.querySelector('.periodo').textContent = alunos[index].periodo
    document.querySelector('.especializacao').textContent = alunos[index].especializacao
    document.querySelector('.nota1').textContent = alunos[index].nota1         
    document.querySelector('.nota2').textContent = alunos[index].nota2
    document.querySelector('.nota3').textContent =  alunos[index].nota3;
    document.querySelector('.nota4').textContent =  alunos[index].nota4;
    document.querySelector('.media').textContent = alunos[index].media;   
    document.querySelector('.situacaoo').textContent = alunos[index].aprovacao;


    function deleted(index) {
        // Remover o aluno do array pelo índice
        alunos.splice(index, 1);
    
        // Atualizar o localStorage
        localStorage.setItem('alunos', JSON.stringify(alunos));
    
        // Redirecionar de volta para a página inicial
        window.location.href = 'index.html';
    }