function vitoria(tabuleiro, simbolo){
    for(var i=0; i<3; i++){//Percorre todo o tabuleiro buscando marcas do jogador atual
        for (var j=0; j<3; j++){
            if (tabuleiro[i][j] == simbolo){//Quando enconra percorre todas as casas em volta procurando outro
                for (var Di = -1; Di < 1; Di++){
                    for (var Dj =-1; Dj <1 ; Dj++){
                        if (!(i+2*Di > 2 || i+2*Di < 0 || i+2*Dj > 2 || i+2*Dj < 0)){ // Garante que não vai estar lendo nenhum out of bounds
                            if (tabuleiro[i+Di][j+Dj] == simbolo && !(Di==0 && Dj==0)){ // A segunda parte da condição impede que o segudo elemento seja o mesmo que o primeiro
                                if (tabuleiro[i+2*Di][j+2*Dj] == simbolo) return true; // Se essa condição for verdadeira, os elementos estão alinhados
                            }
                        }
                    }
                }
            }
        }
    }
    return confereVelha(tabuleiro);
}

function imprimeTabuleiro(tabuleiro){
    for(var i=0; i<3; i++){
        console.log(tabuleiro[i][0]+"|"+tabuleiro[i][1]+"|"+tabuleiro[i][2]);
        if (i != 2) console.log("-----");
    }
    console.log("");
}

function confereVelha(tabuleiro){
    for (var i=0; i<3; i++){
        for (var j=0; j<3; j++) {
            if (tabuleiro[i][j] == ' ') return false; //Enquanto houver um espaço vazio, não deu velha
        }
    }
    return true;
}

function JogoDaVelha(){

    var tabuleiro = [[],[],[]];
    var simboloAtual = 'X'; //O sempre começa
    for(var i=0; i<3; i++){
        for (var j=0; j<3; j++) tabuleiro[i][j] = ' '; //Torna o tabuleiro legível tranformando todos os undefined printáveis em ' '
    }

    do {
        if (simboloAtual == 'X') simboloAtual = 'O'; //Inverte o simbolo para o outro jogador poder jogar
        else simboloAtual = 'X';

        entrax = prompt("Jogador "+simboloAtual+", insira a coordenada X de sua jogada numero de 0 a 2");
        entray = prompt("Jogador "+simboloAtual+", insira a coordenada Y de sua jogada numero de 0 a 2");
        if (tabuleiro[entrax][entray] == ' ') tabuleiro[entrax][entray] = simboloAtual;
        else {
            if (simboloAtual == 'X') simboloAtual = 'O'; // A dupla inversão permite a quem errou jogar de novo
            else simboloAtual = 'X';
            console.log("Espaço inválido");
        }
        imprimeTabuleiro(tabuleiro);
    } while (!vitoria(tabuleiro, simboloAtual));
    if (!confereVelha(tabuleiro)) alert(simboloAtual + " venceu!");
    else alert("Deu Velha");
}