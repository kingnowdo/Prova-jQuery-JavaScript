//Variaveis
var matriz = [];
var entrada1, entrada2;

//Imprime matriz
function imprimeJogo() {
	for(var i = 0; i < 3; i++) {
		var linha = "";

		for(var j = 0; j < 3; j++) {
			linha += matriz[i][j] + " ";
		}
		console.log(linha);
	}
}

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
function jogada(char) {
	var input = prompt("Insira as coordenadas da sua jogada (x,y) (1 a 3):");
	entrada1 = parseInt(input.split(',')[0]) - 1;
	entrada2 = parseInt(input.split(',')[1]) - 1;

	if(entrada1 >= 0 && entrada1 <= 2 && entrada2 >= 0 && entrada2 <= 2 && matriz[entrada1][entrada2] == " ") {
		matriz[entrada1][entrada2] = char; //Adiciona jogada aa matriz
		imprimeJogo();		
		
		//Verifica se usuario ganhou
		if(vitoria(char)) {
			alert("Jogador " + char + " ganhou!");
			return true;
		}
		else if(velha()) {
			alert("Deu velha!");
			return true;
		}
		else {
			return false;
		}
	}
	else {
		console.log("Posicao ilegal. Tente novamente");
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
imprimeJogo();

//Jogo
while(!jogada('X') && !jogada('O')) {

}