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

function confereVelha(tabuleiro){
    for (var i=0; i<3; i++){
        for (var j=0; j<3; j++) {
            if (tabuleiro[i][j] == ' ') return false; //Enquanto houver um espaço vazio, não deu velha
        }
    }
    return true;
}

$(document).ready(function(){
    var simboloAtual;
    var tabuleiro=[[],[],[]];
    
    //Essas três linhas resetam a table
    $("table").children().children().removeClass("X");
    $("table").children().children().removeClass("O");
    $("table").children().children().addClass("inativo");

    var simboloAtual = 'X'; //X sempre começa
    for(var i=0; i<3; i++){
        for (var j=0; j<3; j++) tabuleiro[i][j] = ' '; //Torna o tabuleiro legível tranformando todos os undefined printáveis em ' '
    }
    do {
        $("td").click(function(){

    // Não sei se funciona, mas isso aqui deveria marcar a nova jogada na tabela
            if ($(this).attr("class") == "inativo"){
                $(this).removeClass("inativo");
                $(this).addClass(simboloAtual);
                $(this).appendChild(createTextNode(simboloAtual));
            }
            else {
                if(simboloAtual == "X") simboloAtual = "O";
                else simboloAtual = "X";
                alert("Espaço já ocupado!");
            }
            if(simboloAtual == "X") simboloAtual = "O";
            else simboloAtual = "X";
    //------------------------------------------------------------------
    //Isso aqui deveria descobrir a posicao na tabela da nova marca
            var referencia = $(this);
            var linha = $(this).parent();
            var tabela = linha.parent();
            //Aqui eu estou na table
            var todasLinhas = tabela.children();
            var para = false;
            for(var i=0; i<3 || para; i++){
                var dadosLinha = todasLinhas.children();
                for (var j=0; j<3 || para; j++){
                    if (referencia == dadosLinha.children[j]) para = true;
                }
            }
    //-----------------------------------------------------------------------
            tabuleiro[i][j] = simboloAtual; //Joga no tabuleiro a nova marca
        }); 
    } while (!vitoria(tabuleiro, simboloAtual));
    if (!confereVelha(tabuleiro)) alert(simboloAtual + " venceu!");
    else alert("Deu Velha");
});

/*Na minha cabeça funciona.
O navegador discorda
¯\_(ツ)_/¯
Pega leve na reco, plis */