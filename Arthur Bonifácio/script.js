function Jogador(nome, forma) {
	this.nome = nome;
	this.forma = forma;
}
		
var jogador1, jogador2;
var win1 = 0, win2 = 0;
document.getElementById('placar').innerHTML = "Placar: " +win1 +" X " +win2;
//Jogador da rodada
var jogadorAtual;
var formas = ['X', 'O'];
var index = null;

var mesa = new Array(9);


initGame = function() {
	var nomeJogador1 = document.getElementById('jogador1').value;
	var nomeJogador2 = document.getElementById('jogador2').value;
	jogador1 = new Jogador(nomeJogador1, 0); //X
	jogador2 = new Jogador(nomeJogador2, 1); //O
    jogadorAtual = jogador1;
	setLabelJogadorAtual();
}

reset = function() {
    var obj = document.getElementsByClassName('card-panel');
    for(var i = 0; i < 9; i++){
        mesa[i]=undefined;
        obj[i].innerHTML = "";
    }
}
		
setLabelJogadorAtual = function() {
    document.getElementById('jogadorAtual').innerHTML = 'Jogador atual:  ' + jogadorAtual.nome;
}

mesaCheia = function() {
    var preenchidos = 0;
        for(var i = 0; i < mesa.length; i++)
            if(mesa[i]	!= undefined) 
                preenchidos++;
        return preenchidos == mesa.length;
}

confereLinha = function() {
    for( var i = 0; i < 7; i += 3) {
        if ( mesa[i] == 'X' && mesa[i + 1] == 'X' && mesa[i + 2] == 'X' ) { 
            alert (jogador1.nome + ' venceu!');
            win1++;
            document.getElementById('placar').innerHTML = "Placar: " +win1 +" X " +win2;
            reset();
        }
        if ( mesa[i] == 'O' && mesa[i + 1] == 'O' && mesa[i + 2] == 'O' ) {
            alert (jogador2.nome + ' venceu!');
            win2++;
            document.getElementById('placar').innerHTML = "Placar: " +win1 +" X " +win2;
            reset();
        }
    }
}

confereColuna = function() {
    for( var i = 0; i < 3; i++) {
        if ( mesa[i] == 'X' && mesa[i + 3] == 'X' && mesa[i + 6] == 'X' ) { 
            alert (jogador1.nome + ' venceu!');
            win1++;
            document.getElementById('placar').innerHTML = "Placar: " +win1 +" X " +win2;
            reset();
        }
        if ( mesa[i] == 'O' && mesa[i + 3] == 'O' && mesa[i + 6] == 'O' ) {
            alert (jogador2.nome + ' venceu!');
            win2++;
            document.getElementById('placar').innerHTML = "Placar: " +win1 +" X " +win2;
            reset();
        }
    }

}

confereDiagonal = function() {
    if ( (mesa[0] == 'X' && mesa[4] == 'X' && mesa[8] == 'X') ||
            (mesa[2] == 'X' && mesa[4] == 'X' && mesa[6] == 'X')) {
            alert (jogador1.nome + ' venceu!');
            win1++;
            document.getElementById('placar').innerHTML = "Placar: " +win1 +" X " +win2;
        reset();
    } else if ( (mesa[0] == 'O' && mesa[4] == 'O' && mesa[8] == 'O') ||
                (mesa[2] == 'O' && mesa[4] == 'O' && mesa[6] == 'O') ) {
            alert (jogador2.nome + ' venceu!');
            win2++;
            document.getElementById('placar').innerHTML = "Placar: " +win1 +" X " +win2;
            reset();
    } 
}

preencheDiv = function(div, pos) { 
        if(mesa[pos] == undefined) {
            div.innerHTML = formas[jogadorAtual.forma];
            mesa[pos] = formas[jogadorAtual.forma];

            //define o jogador da rodada
            (jogadorAtual.forma == 0) ? jogadorAtual = jogador2 : jogadorAtual = jogador1;
            setLabelJogadorAtual();

        } else alert('Casa ja marcada!');

        confereLinha();
        confereColuna();
        confereDiagonal();

        if ( mesaCheia() ) {
            alert ('Deu velha!');
            reset();
        }
        
    
}