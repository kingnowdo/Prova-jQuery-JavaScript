function verifica(array) {
	 var contLinhas = [0,0,0]; //Conta as 3 linhas e checa se alguma delas está completa
	 var contColunas = [0,0,0]; //Conta as 3 colunas e checa se alguma delas está completa
	 var contDiagonais = [0,0]; //Conta as 2 diagonais e bla bla bla

	 var i = 0;

	 while(array[i] != null){ 

	 	 contLinhas[(array[i].linha)-1]++;
		 contColunas[(array[i].coluna)-1]++;
		 if(array[i].linha == array[i].coluna)
		 	contDiagonais[0]++;
		 if(array[i].linha == 3 && array[i].coluna == 1 || array[i].linha == 1 && array[i].coluna == 3 || array[i].linha == 2 && array[i].coluna == 2)
		 	contDiagonais[1]++;

		 if(contColunas.indexOf(3) != -1||contLinhas.indexOf(3) != -1||contDiagonais.indexOf(3) != -1)
		 	return true;
		i++;
	 }
     return false;
 }
 
function reset(p1, p2, winner){
	$("td").css({"background-color": "red"});
	$("td").removeClass("cheio");
	$("td").addClass("vazio");
	if(p1 === winner){
		p1.pontos++;
	} else if(p2 === winner){
		p2.pontos++;
	}

	p1.rodadaAtual = [];
	p2.rodadaAtual = [];

	document.getElementById("ponto1").innerHTML = p1.pontos;
	document.getElementById("ponto2").innerHTML = p2.pontos;
}


  $(document).ready(function() {
    var turno = true;   //true = "bolinha" e false = "xis"
	var cont = 0;

	var player1 = {
		nome: "Jogador1",
		pontos: 0,
		rodadaAtual: []
	}

	var player2 = {
		nome: "Jogador2",
		pontos: 0,
		rodadaAtual: []
	}

	document.getElementById("TA1").value = player1.nome;
 	document.getElementById("TA2").value = player2.nome;
	document.getElementById("ponto1").innerHTML = player1.pontos;
	document.getElementById("ponto2").innerHTML = player2.pontos;
	$("#ind1").css({"background-color": "red", "color": "white"});
	$("#ind2").css({"background-color": "blue", "color": "blue"});

  	$("td").click(function() {
 		if($(this).attr("class").split(' ').some(function(element) { return element == "vazio" })){
			var coluna = $(this).attr("class").split(' ')[0];
			var linha = $(this).parent().attr("id");

			$(this).addClass("cheio");
			$(this).removeClass("vazio");

			if(turno){

				$("#ind1").css({"background-color": "blue", "color": "blue"});
				$("#ind2").css({"background-color": "red", "color": "white"});
 				
				$(this).css({"background-color": "green"});
				player1.rodadaAtual.push({"coluna": coluna, "linha": linha});
				if(verifica(player1.rodadaAtual) == true){
					player1.nome = document.getElementById("TA1").value;
					alert(player1.nome + " ganhou!");
					turno = !turno;
					cont = -1;
					reset(player1, player2, player1);
					$("#ind1").css({"background-color": "red", "color": "white"});
					$("#ind2").css({"background-color": "blue", "color": "blue"});
				}
			}
			else{

				$("#ind1").css({"background-color": "red", "color": "white"});
				$("#ind2").css({"background-color": "blue", "color": "blue"});

			 	$(this).css({"background-color": "yellow"});
 				player2.rodadaAtual.push({"coluna": coluna, "linha": linha});
				if(verifica(player2.rodadaAtual) == true){
					player2.nome = document.getElementById("TA2").value;
					alert(player2.nome + " ganhou!");
					turno = !turno;
					cont = -1;
					reset(player1, player2, player2);
					$("#ind1").css({"background-color": "blue", "color": "blue"});
					$("#ind2").css({"background-color": "red", "color": "white"});
				}
			}
			turno = !turno;
			cont++;
			if(cont == 9){
				alert("EMPATE");
				cont = 0;
				reset(player1, player2, null);
			}
 		}
  	});
  });