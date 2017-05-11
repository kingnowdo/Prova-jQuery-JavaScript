$(document).ready(function(){
	var maxRodadas = 9;
	var campo = [];
	var vet = [0,0,0];
	for (var i = 0; i < 3; i++) {
		campo[i] = vet;
	}
	
	var scoreP1 = 0;
	var scoreP2 = 0;

	var players = $("h3");
	players[0].append(p1 + ": ");
	players[1].append(p2 + ": ");
	
	while(true){
		for (var i = 0; i < maxRodadas; i++) {
			var marcacao;
			if(i % 2 === 0){
				$("#p1").css("color" : "green");
				var coord = prompt(p1 + ", digite as coordenadas separadas por espaço: ");
				var coordArray = coord.split(" ");
		
				campo[coordArray[0]][coordArray[1]] = 1;
				marcacao = "X";
				$("#p1").css("color" : "black");
			}
			else{
				$("#p2").css("color" : "green");
				var coord = prompt(p2 + ", digite as coordenadas separadas por espaço: ");
				var coordArray = coord.split(" ");
		
				campo[coordArray[0]][coordArray[1]] = 2;
				marcacao = "O";
				$("#p2").css("color" : "black");
			}
	
			$("table").children()[coordArray[0]].children()[coordArray[1]].append(marcacao);
	
			//  				         1a linha									2a linha											3a linha								1a coluna										2a coluna									3a coluna							diagonal primaria								diagonal secundaria
				// se o player 1 ganhou
			if(campo[0][0] === campo[0][1] === campo[0][2] === 1 || campo[1][0] === campo[1][1] === campo[1][2] === 1 || campo[2][0] === campo[2][1] === campo[2][2] === 1 || campo[0][0] === campo[1][0] === campo[2][0] === 1 || campo[0][1] === campo[1][1] === campo[2][1] === 1 || campo[0][2] === campo[1][2] === campo[2][2] === 1 || campo[0][0] === campo[1][1] === campo[2][2] === 1 || campo[0][2] === campo[1][1] === campo[2][0] === 1){
				console.log(p1 + " ganhou!!!!\n");
				scoreP1++;
				players[0].replace(players[0] + scoreP1);
			}
			// se o player 2 ganhou
			else if(campo[0][0] === campo[0][1] === campo[0][2] === 1 || campo[1][0] === campo[1][1] === campo[1][2] === 1 || campo[2][0] === campo[2][1] === campo[2][2] === 1 || campo[0][0] === campo[1][0] === campo[2][0] === 1 || campo[0][1] === campo[1][1] === campo[2][1] === 1 || campo[0][2] === campo[1][2] === campo[2][2] === 1 || campo[0][0] === campo[1][1] === campo[2][2] === 1 || campo[0][2] === campo[1][1] === campo[2][0] === 1){
				console.log(p2 + " ganhou!!!!\n");
				scoreP2++;
				players[1].replace(players[1] + scoreP2);
			}
		}
	
		alert("Deu velha!!");

		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				campo[i][j] = 0;
				$("table").children()[i]].children()[j].removeProp("value");

			}
		}
		$("table").children
	}
/*
----------
|00|01|02|
----------
|10|11|12|
----------
|20|21|22|
----------
*/
})