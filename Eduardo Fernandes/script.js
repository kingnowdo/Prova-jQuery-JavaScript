/***********VARIAVEIS************/
var matriz = [];
var entrada1, entrada2;

var nomeP1 = "Jogador1", nomeP2 = "Jogador2";
var ponto1 = 0, ponto2 = 0;
var turn = true;

/**********FUNCOES JQUERY********/
function atualizaPlacar() {
	$("#placar").html(nomeP1 + " " + ponto1 + " x " + ponto2 + " " + nomeP2);
}

function limpaTabuleiro() {
	Array.from($("td")).forEach(function(element) {
		$(element).html("");
	});

	geraJogo();
}

/*************JQUERY************/
$(document).ready(function() {
	geraJogo();

	//Atualiza placar
	atualizaPlacar();

	/**Nomes**/
	$("#botaoP1").click(function() {
		nomeP1 = $("#nomeP1").val();
		atualizaPlacar();

		if(nomeP1 != "Jogador1" && nomeP2 != "Jogador2") {
			$("#status").css({
				"color": "#333",
				"transition": "0.15s"
			});

			$("#status").html("Vez do " + nomeP1);
		}
	});

	$("#botaoP2").click(function() {
		nomeP2 = $("#nomeP2").val();
		atualizaPlacar();

		if(nomeP1 != "Jogador1" && nomeP2 != "Jogador2") {
			$("#status").css({
				"color": "#333",
				"transition": "0.15s"
			});

			$("#status").html("Vez do " + nomeP1);
		}
	});

	/**Jogo em si**/
	$("td").click(function() {
		if(nomeP1 == "Jogador1" || nomeP2 == "Jogador2") {
			$("#status").css({
				"color": "#FF444A",
				"transition": "0.15s"
			});
		}
		else {
			if(jogada($(this).attr("id"), $(this))) {
				//Se alguem ganhou
				limpaTabuleiro();
				turn ? ponto1++ : ponto2++;
				atualizaPlacar();

				turn = false;
			}

			turn = !turn;
			$("#status").html("Vez do " + (turn ? nomeP1 : nomeP2));
		}
	});
});


/**************JOGO**************/
//Gera matriz vazia
function geraJogo() {
	for(var i = 0; i < 3; i++) {
		matriz[i] = [];

		for(var j = 0; j < 3; j++) {
			matriz[i][j] = " ";
		}
	}
}

//Pega input e atualiza matriz
function jogada(coordenadas, obj) {
	var char = turn ? "X" : "O";
	entrada1 = parseInt(coordenadas.split(',')[0]) - 1;
	entrada2 = parseInt(coordenadas.split(',')[1]) - 1;

	if(matriz[entrada1][entrada2] == " ") {
		matriz[entrada1][entrada2] = char; //Adiciona jogada aa matriz
		obj.html(char);
		
		//Verifica se usuario ganhou
		if(vitoria(char)) {
			$("#status").html((turn ? nomeP1 : nomeP2) + " ganhou!");
			return true;
		}
		else if(velha()) {
			$("#status").html("Deu velha!");
			limpaTabuleiro();
			return false;
		}
		else {
			return false;
		}
	}
	else {
		$("#status").html("Posição ilegal. Tente novamente");
		jogada(char);
	}
}

//Verifica vitoria
function vitoria(char) {
	if(matriz[0][0] == char && matriz[0][1] == char && matriz[0][2] == char) return true;
	if(matriz[1][0] == char && matriz[1][1] == char && matriz[1][2] == char) return true;
	if(matriz[2][0] == char && matriz[2][1] == char && matriz[2][2] == char) return true;
	if(matriz[0][0] == char && matriz[1][0] == char && matriz[2][0] == char) return true;
	if(matriz[0][1] == char && matriz[1][1] == char && matriz[2][1] == char) return true;
	if(matriz[0][2] == char && matriz[1][2] == char && matriz[2][2] == char) return true;
	if(matriz[0][0] == char && matriz[1][1] == char && matriz[2][2] == char) return true;
	if(matriz[0][2] == char && matriz[1][1] == char && matriz[2][0] == char) return true;

	return false;
}

//Verifica velha
function velha() {
	for(var i = 0; i < 3; i++) {
		if(!matriz[i].every(function(element) { return element != " " })) return false;
	}

	return true;
}

//Inicia jogo
geraJogo();

/*Jogo
while(!jogada('X') && !jogada('O')) {

}*/