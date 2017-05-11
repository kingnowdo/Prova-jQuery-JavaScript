/**
 * Jogo em jQuery
 */

var j1;
var j2;
var points1 = 0;
var points2 = 0;
var i = 0;
var simbols = ["X", "O"];

function verify(value){
    if($("#1").text() == value && $("#2").text() == value && $("#3").text() == value) return true;
    if($("#4").text() == value && $("#5").text() == value && $("#6").text() == value) return true;
    if($("#7").text() == value && $("#8").text() == value && $("#9").text() == value) return true;
    if($("#1").text() == value && $("#4").text() == value && $("#7").text() == value) return true;
    if($("#2").text() == value && $("#5").text() == value && $("#8").text() == value) return true;
    if($("#3").text() == value && $("#6").text() == value && $("#9").text() == value) return true;
    if($("#1").text() == value && $("#5").text() == value && $("#9").text() == value) return true;
    if($("#3").text() == value && $("#5").text() == value && $("#7").text() == value) return true;
    return false;
}

function limpa_tabuleiro(j1, j2, p1, p2){
    for(var j = 1; j <= 9; j++){
        $(("#"+j)).text("");
        $(("#"+j)).addClass("inativo");
        $(("#"+j)).removeClass("ativo");
    }
    if(j1 === undefined || j2 === undefined){
        $("#Name1").text("Jogador1(X) - Pontos: " + p1);
        $("#Name2").text("Jogador2(O) - Pontos: " + p2);
    }
    else{
        $("#Name1").text("Jogador1: " + j1 + "(X) - Pontos: " + p1);
        $("#Name2").text("Jogador2: " + j2 + "(O) - Pontos: " + p2);
    }
}

$(document).ready(function(){
    $("td").css({"height": "150px", "width": "150px", "text-align": "center"});


    $("button").click(function(){
        j1 = $("#Jogador1").val();
        j2 = $("#Jogador2").val();
        if(j1 === "" || j2 === ""){
            alert("Favor digitar os nomes novamente");
            return;
        }
        $("#Name1").text(j1 + "(X) - Pontos: " + points1);
        $("#Name2").text(j2 + "(O) - Pontos: " + points2);
    });

    $("td").click(function() {
		//Verifica se a carta ja nao foi escolhida
		if($(this).attr("class") == "ativo") {
			alert("Essa posição já está marcada");
		}
		else {
			//Adiciona classe 'ativo' e remove 'inativo'
			$(this).addClass("ativo");
			$(this).removeClass("inativo");
			
			$(this).text(simbols[i%2]);
            if(verify(simbols[i%2])){
                if(i%2 == 0){
                    if(j1 == undefined) alert("Jogador 1 ganhou!");
                    else alert(j1 + " ganhou!");
                    points1++;
                }
                else{
                    if(j2 == undefined) alert("Jogador 2 ganhou!");
                    else alert(j2 + " ganhou!");
                    points2++;
                }
                limpa_tabuleiro(j1, j2, points1, points2);
                i = 0;
            }
            else if(i === 8){
                alert("Deu velha!");
                limpa_tabuleiro(j1, j2, points1, points2);
                i=0;
            }
            else i++;
				//verifica(escolha1, escolha2);

				//escolha1 = null;
				//escolha2 = null;
		}
	});
});

/**
 * Lógica
 */
function console_game(){
    function cria_tabuleiro(){
        var t = [];
        for(var i = 0; i < 3; i++){
            t[i] = [];
            for(var j = 0; j < 3; j++){
                t[i][j] = " ";
            }
        }
        return t;
    }

    function marca(value, x, y, table){
        if(table[x][y] !== " "){
            console.log('Posição já marcada');
            x = prompt("Digite a coordenada x");
            y = prompt("Digite a coordenada y");
            return table = marca(value, x, y, table);
        }
        table[x][y] = value;
        return table;
    }

    function printa_jogo(table){
        var s = '';
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                s += table[i][j];
            }
            s+= "\n";
        }
        return s;
    }

    function checa_vitoria(table, value){
        for(var i = 0; i < 3; i++){
            if(table[i][0] === value && table[i][1] === value && table[i][2] === value){
                return true;
            }
            if(table[0][i] === value && table[1][i] === value && table[2][i] === value){
                return true;
            }
        }
        if(table[0][0] === value && table[1][1] === value && table[2][2] === value){
            return true;
        }
        if(table[0][2] === value && table[1][1] === value && table[2][0] === value){
            return true;
        }
        return false;
    }

    var table = cria_tabuleiro();
    var check = false;
    var simbolos = ["x", "o"];
    for(z = 0; check !== true; z++){
        var x = prompt("Digite a coordenada x");
        var y = prompt("Digite a coordenada y");
        table = marca(simbolos[z%2], x, y, table);
        console.log(printa_jogo(table));
        check = checa_vitoria(table, simbolos[z%2]);
    }
    alert(simbolos[(z-1)%2] + " ganhou!!");
}
/**
 * Fim da lógica
 */