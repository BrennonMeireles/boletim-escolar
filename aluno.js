class Aluno {
    id;
    nome;
    curso;
    ano;
    periodo;
    especializacao;
    nota1;
    nota2;
    nota3;
    nota4;
    media;
    aprovacao;

    constructor(id, nome, curso, ano, periodo, especializacao, nota1, nota2, nota3, nota4, media, aprovacao){
        this.id = id;
        this.nome = nome;
        this.curso = curso;
        this.ano = ano;
        this.periodo = periodo;
        this.especializacao = especializacao;
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.nota4 = nota4        
        this.media = media;
        this.aprovacao = aprovacao;
    }
}