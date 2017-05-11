/* Testes de terminal
var j = ['x','o','x',
		 'o','x','-',
		 'o','-','x'];
console.log(checaJogadas(j));

j = ['x','o','o',
	 'o','x','-',
	 'o','-','-'];
console.log(checaJogadas(j));
*/

var nome1="",nome2="";
var placar1=0,placar2=0;
var rodada = true;

var estadoJogo = false;
var quadradosClicados = [];
var jogadas = ['-','-','-',
			   '-','-','-',
		   	   '-','-','-']; 


//clique em cada quadrado
$(".quadrado").click(function(){
	if(estadoJogo){
		var id = $(this).attr('id');
		var posicao = id[1];
		if(!quadradosClicados.includes(posicao)){
			
			quadradosClicados.push(posicao);
			//vez de qual jogador
			if(rodada){
				jogadas[posicao] = 'x';
				document.getElementById(id).childNodes[0].innerHTML = "X";
				document.getElementById("Vez").innerHTML = "É a vez de: " + nome1;
			}
			else{
				jogadas[posicao] = 'o';
				document.getElementById(id).childNodes[0].innerHTML = "0";
				document.getElementById("Vez").innerHTML = "É a vez de: " + nome2;
			}
			rodada=!rodada;

			var check = checaJogadas(jogadas);
			if(check==2){
				placar1++;
				document.getElementById("nome1").innerHTML = nome1 + ": " + placar1;
				restart();
			}
			else if(check==1){
				placar2++;				
				document.getElementById("nome2").innerHTML = nome2 + ": " + placar2;
				restart();
			}

			//checa se acabaram as jogadas
			else if(quadradosClicados.length==9){
				restart();
			}
		}
	}
});


function restart(){
	quadradosClicados = [];
	jogadas = ['-','-','-',
			   '-','-','-',
			   '-','-','-']; 
	if(rodada)
		document.getElementById("Vez").innerHTML = "É a vez de: " + nome2;
	else
		document.getElementById("Vez").innerHTML = "É a vez de: " + nome1;

    for(var i=0;i<9;i++)
		document.getElementById("p" + i).childNodes[0].innerHTML = "-";
}

//clique de inicio
$("#btInicio").click(function() {
    nome1 = $('#user1').val();
    nome2 = $('#user2').val();

	//muda os nomes no placar
	console.log(nome1);
	console.log(nome2);
	document.getElementById("nome1").innerHTML = nome1 + ": " + placar1;
	document.getElementById("nome2").innerHTML = nome2 + ": " + placar2;
	
	$('#nome1').text(nome1 + ": 0");
	$('#nome2').text(nome2 + ": 0");

	document.getElementById("btInicio").disabled = true;
	document.getElementById("btReset").disabled = false;

	estadoJogo = true;
	document.getElementById("Vez").innerHTML = "É a vez de: " + nome2;

});

$("#btReset").click(function() {
	restart();
	document.getElementById("Vez").innerHTML = "É a vez de:";
	document.getElementById("nome1").innerHTML = "Jogador 1: ";
	document.getElementById("nome2").innerHTML = "Jogador 2: ";
	
	document.getElementById("btInicio").disabled = false;
	document.getElementById("btReset").disabled = true;

	nome1="",nome2="";
	placar1=0,placar2=0;
	rodada = true;
	estadoJogo = false;

});