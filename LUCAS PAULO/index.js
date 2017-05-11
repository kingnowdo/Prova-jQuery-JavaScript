function Jogador(nome, forma) {
    this.nome = nome;
    this.forma = forma;
}
var jogador1, jogador2;
var jogadorAtual;
var formas = ['X', 'O'];//0 - 1
var index = null;
var tabuleiro = new Array(9);
tabuleiro =['-','-','-',
            '-','-','-',
            '-','-','-'];
var nome_armazenado1;
var nome_armazenado2;
var placar1=0;
var placar2=0;

function reset(verifica){ 
    if(verifica==1){//jogador 1 venceu
        placar1++;
        var placar = document.getElementById('placar1').innerHTML = placar1;
    }
    if(verifica==2){//jogador 2 venceu
        placar2++;
        var placar = document.getElementById('placar2').innerHTML = placar2;
    }
    //verifica==3 empate
    var tabelas = document.getElementsByTagName('td'); 
    for(var i=0;i<tabelas.length;i++){
        tabelas[i].innerHTML='-';
    }
    tabuleiro =['-','-','-',
                '-','-','-',
                '-','-','-'];
    jogadorAtual = jogador1;
    document.getElementById('jogadorAtual').innerHTML = 'Jogador:  ' + jogadorAtual.nome;
} 

function setnome(){//coloca os nomes na pagina html
    var jogador11 = document.getElementById('jogador1').value; 
    var elemento = document.getElementById('nome_jogador1').innerHTML = jogador11;
    var jogador22 = document.getElementById('jogador2').value; 
    var elemento1 = document.getElementById('nome_jogador2').innerHTML = jogador22;
    jogador1 = new Jogador(jogador11, 0);
    jogador2 = new Jogador(jogador22, 1);
    jogadorAtual = jogador1;
    document.getElementById('jogadorAtual').innerHTML = 'Jogador:  ' + jogadorAtual.nome;
    var divs = document.getElementsByTagName('td'); 
    for(var i=0;i<divs.length;i++){
        divs[i].innerHTML='-';
    }
}   

function newsetnome(){//coloca os nomes na pagina html
    var jogador11 = document.getElementById('jogador1').value; 
    var elemento = document.getElementById('nome_jogador1').innerHTML = jogador11;
    var jogador22 = document.getElementById('jogador2').value; 
    var elemento1 = document.getElementById('nome_jogador2').innerHTML = jogador22;
    jogador1 = new Jogador(jogador11, 0);
    jogador2 = new Jogador(jogador22, 1);
    jogadorAtual = jogador1;
    document.getElementById('jogadorAtual').innerHTML = 'Jogador:  ' + jogadorAtual.nome;
}   

function vencedorDiagonal() { //verifica vencedor nas diagonais
    if ((tabuleiro[0]=='X'&&tabuleiro[4]=='X'&& tabuleiro[8]=='X')||(tabuleiro[2]=='X'&& tabuleiro[4]=='X'&&tabuleiro[6]=='X')){
        reset(1);
    }
    else if((tabuleiro[0]=='O'&&tabuleiro[4]=='O'&&tabuleiro[8]=='O')||(tabuleiro[2]=='O'&&tabuleiro[4]=='O'&&tabuleiro[6]=='O')){
        reset(2);
    } 
}

function cheio(){//verifica se o tabuleiro ta cheio
    var preenchidos = 0;
    for(var i=0;i<tabuleiro.length;i++)
        if(tabuleiro[i]!='-'){preenchidos++;}
    return preenchidos==tabuleiro.length;
}

function vencedorLinhas() { //procura um vencedor nas linhas
    for(var i=0;i<7;i+=3) {
        if(tabuleiro[i]=='O'&&tabuleiro[i+1]=='O'&&tabuleiro[i+2]=='O'){reset(2);}
        if(tabuleiro[i+2]=='X'&&tabuleiro[i]=='X'&&tabuleiro[i+1]=='X'){reset(1);}
    }
}

function vencedorColunas() {//verificar vencedor nas colunas
    for(var i=0;i<3;i++) {
        if (tabuleiro[i]=='O'&&tabuleiro[i+3]=='O'&&tabuleiro[i+6]=='O'){reset(2);}
        if (tabuleiro[i+6]=='X'&&tabuleiro[i]=='X'&&tabuleiro[i+3]=='X'){reset(1);}
    }
}

function jogada(elemento, lugar) { 
    if(tabuleiro[lugar]=='-') {
        elemento.innerHTML = formas[jogadorAtual.forma];
        tabuleiro[lugar]=formas[jogadorAtual.forma];
        if(jogadorAtual.forma==0){jogadorAtual = jogador2;}
        else{jogadorAtual=jogador1}
        document.getElementById('jogadorAtual').innerHTML = 'Jogador:  ' + jogadorAtual.nome;
    } 
    vencedorLinhas();
    vencedorDiagonal();
    vencedorColunas();
    if(cheio()){
        reset(3);
    }
}  