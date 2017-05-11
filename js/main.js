var jogo = []
var jogoAcabado = true
var rodada = 0
var jogEsq = ""
var jogDir = ""

var verificaLinhas = function(elem){
	if (jogo[0].equals([elem, elem, elem]) || jogo[1].equals([elem, elem, elem]) || jogo[2].equals([elem, elem, elem])) {
		return true;
	}
	return false;
}

var verificaColunas = function(elem){
	// irei salvar as colunas em um aray cada uma para facilitar as comparações
	var zero  = []
	var um = []
	var dois = []

	for (var i = jogo.length - 1; i >= 0; i--) {
		zero.push(jogo[i][0])
		um.push(jogo[i][1])
		dois.push(jogo[i][2])
	}
	if (zero.equals([elem, elem, elem]) || um.equals([elem, elem, elem]) || dois.equals([elem, elem, elem])) {
		return true;
	}
	return false;
}

var verificaDiagonais = function(elem){
	// irei salvar as diagonais em um aray cada uma para facilitar as comparações
	var d1  = []
	var d2 = []

	for (var i = jogo.length - 1; i >= 0; i--) {
		d1.push(jogo[i][i])
		d2.push(jogo[2-i][i])
	}
	if (d1.equals([elem, elem, elem]) || d2.equals([elem, elem, elem])) {
		return true;
	}
	return false;
}

var qualCor = function(rodada) {
	if (rodada % 2 == 0) {
		return 'purple darken-4'
	} else {
		return 'red darken-4'
	}
}

var qualJogador = function(rodada) {
	return (rodada % 2 == 0 ? ('Vez de ' + jogEsq) : ('Vez de ' + jogDir))
}

var resetTile = function(elem) {
	elem.removeClass('purple darken-4')
	elem.removeClass('red darken-4')
	elem.addClass('white')
}

jQuery(document).ready(function($) {
	// inicialização da matriz que armazenará o jogo
	for (var i = 2; i >= 0; i--) {
		jogo[i] = [null, null, null]
	}

	$('#btnPlay').click(function(event) {
		jogEsq = $('#nameLeft').val()
		jogDir = $('#nameRight').val()

		if (jogoAcabado == true) {
			// reinicia a matriz
			for (var i = 2; i >= 0; i--) {
				jogo[i] = [null, null, null]
			}
			for (var i = 9; i >= 0; i--) {
				resetTile($('#'.concat(i)))
			}
			// var rodada server para saber qual rodada é e quem joga
			$('#painelIndicador').text("Vez de " + jogEsq)
			jogoAcabado = false
			rodada = 0
		}
		$('.tile').click(function(event) {
			if (!(jogoAcabado)) {
				// o que acontece quando o cara clica 2x na mesma tile?
				if (!($(this).hasClass('white'))) {
					// nada
				} else {
					// onde o tile está?
					var x = (($(this).attr('id') < 4) ? 0 : (($(this).attr('id') < 7 ? 1 : 2)))
					var y = (($(this).attr('id')%3 == 0) ? 2 : ($(this).attr('id')%3) - 1)

					jogo[x][y] = (rodada%2==0 ? 'L' : 'R')
					
					$(this).removeClass('white')
					$(this).addClass(qualCor(rodada))
					
					++rodada
					$('#painelIndicador').text(qualJogador(rodada))
					if (rodada > 8 && jogoAcabado == false) {
						$('#painelIndicador').text("Deu Velha! :(")	
						jogoAcabado = true
					} else if (rodada >= 5){
						// vamos ver se o jogador da esquerda ganhou
						if (verificaLinhas('L') || verificaColunas('L') || verificaDiagonais('L')){
							$('#painelIndicador').text(jogEsq + " ganhou!")
							jogoAcabado = true
							$('#placarLeft').text((parseInt($('#placarLeft').text()))+1)
						} else if (verificaLinhas('R') || verificaColunas('R') || verificaDiagonais('R')){
							$('#painelIndicador').text(jogDir + " ganhou!")	
							jogoAcabado = true
							$('#placarRight').text((parseInt($('#placarRight').text()))+1)
						}
					}
				}
			} 
		});
	});
});