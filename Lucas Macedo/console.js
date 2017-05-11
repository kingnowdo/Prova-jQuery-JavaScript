	var maxRodadas = 9;
	var campo = [];
	var vet = [0,0,0];
	for (var i = 0; i < 3; i++) {
		campo[i] = vet;
	}
	
	var scoreP1 = 0;
	var scoreP2 = 0;
	var p1 = prompt("Digite seu nome, jogador 1: ");
	var p2 = prompt("Digite seu nome, jogador 2: ");

	for (var i = 0; i < maxRodadas; i++) {
		campo;
		var marcacao;
		if(i % 2 == 0){
			var coord = prompt(p1 + ", digite as coordenadas separadas por espaço: ");
			var coordArray = coord.split(" ");
			var x = parseInt(coordArray[0]);
			var y = parseInt(coordArray[1]);
			campo[coordArray[0]][coordArray[1]] = 1;
		}
		else{
			var coord = prompt(p2 + ", digite as coordenadas separadas por espaço: ");
			var coordArray = coord.split(" ");
			var x = parseInt(coordArray[0]);
			var y = parseInt(coordArray[1]);
			campo[coordArray[0]][coordArray[1]] = 2;
		}

		//  				      										   1a linha															2a linha																	3a linha									1a coluna											2a coluna									3a coluna								diagonal primaria									diagonal secundaria
			// se o player 1 ganhou
		if(((campo[0][0] == campo[0][1]) && (campo[0][1] == campo[0][2]) && (campo[0][1] == 1)) || ((campo[1][0] == campo[1][1]) && (campo[1][1] == campo[1][2]) && (campo[1][1] == 1)) || ((campo[2][0] == campo[2][1]) && (campo[2][1] == campo[2][2]) && (campo[2][1] == 1)) || ((campo[0][0] == campo[1][0]) && (campo[1][0] == campo[2][0]) && (campo[2][0] == 1)) || ((campo[0][1] == campo[1][1]) && (campo[1][1] == campo[2][1]) && (campo[0][1] == 1)) || ((campo[0][2] == campo[1][2]) && (campo[1][2] == campo[2][2]) && (campo[1][2] == 1)) || ((campo[0][0] == campo[1][1]) && (campo[1][1] == campo[2][2]) && (campo[1][1] == 1)) || ((campo[0][2] == campo[1][1]) && (campo[1][1] == campo[2][0]) && (campo[1][1] == 1))){
			console.log(p1 + " ganhou!!!!\n");
		}
		// se o player 2 ganhou
		else if(((campo[0][0] == campo[0][1]) && (campo[0][1] == campo[0][2]) && (campo[0][1] == 1)) || ((campo[1][0] == campo[1][1]) && (campo[1][1] == campo[1][2]) && (campo[1][1] == 1)) || ((campo[2][0] == campo[2][1]) && (campo[2][1] == campo[2][2]) && (campo[2][1] == 1)) || ((campo[0][0] == campo[1][0]) && (campo[1][0] == campo[2][0]) && (campo[2][0] == 1)) || ((campo[0][1] == campo[1][1]) && (campo[1][1] == campo[2][1]) && (campo[0][1] == 1)) || ((campo[0][2] == campo[1][2]) && (campo[1][2] == campo[2][2]) && (campo[1][2] == 1)) || ((campo[0][0] == campo[1][1]) && (campo[1][1] == campo[2][2]) && (campo[1][1] == 1)) || ((campo[0][2] == campo[1][1]) && (campo[1][1] == campo[2][0]) && (campo[1][1] == 1))){
			console.log(p2 + " ganhou!!!!\n");
		}
	}
	console.log("deu velha!");

/*
----------
|00|01|02|
----------
|10|11|12|
----------
|20|21|22|
----------
*/