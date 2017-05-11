function jogo ()
{
    var jogador1 = [];
    var jogador2 = [];
    var vetor = sorteiaPosicao();

    for (var i=0, j=2; j<10; i=i+2, j=j+2)
    {
        console.log ("Jogador 1, sua posição será: ");
        console.log (vetor[i]);
        jogador1[i] = vetor[i];

        if (verificaVitoria(jogador1) == 1) //se ganhou
        {
            console.log ("PARABÉNS, JOGADOR 1, VOCÊ GANHOU!!!");
            break;
        }

        console.log ("Jogador 2, sua posição será: ");
        console.log (vetor[i+1]);
        jogador2[i] = vetor[i+1]; 

        if (verificaVitoria(jogador2) == 1) //se ganhou
        {
            console.log ("PARABÉNS, JOGADOR 2, VOCÊ GANHOU!!!");
            break;
        }       
    }

    if (verificaVitoria(jogador1) == 0 && verificaVitoria (jogador2) == 0) //se nenhum dos dois ganhou
    {
        console.log ("DEU VELHA...");
    }
}

function sorteiaPosicao () 
{
    var posicao =[1, 2, 3, 4, 5, 6, 7, 8, 9];
    posicao.sort(function(a, b){return 0.5 - Math.random()});
    console.log(posicao);
    return posicao;
}

function verificaVitoria (vetor)
{
        if ((vetor.indexOf(1) != -1 && vetor.indexOf(2) != -1 && vetor.indexOf(3) != -1)|| (vetor.indexOf(4) != -1 && vetor.indexOf(5) != -1 && vetor.indexOf(6)!= -1) || (vetor.indexOf(7) != -1 && vetor.indexOf(8) != -1 && vetor.indexOf(9)!= -1)
        || (vetor.indexOf(1) != -1 && vetor.indexOf(4) != -1 && vetor.indexOf(7)!= -1) || (vetor.indexOf(2) != -1 && vetor.indexOf(5) != -1 && vetor.indexOf(8)!= -1) || (vetor.indexOf(3) != -1 && vetor.indexOf(6) != -1 && vetor.indexOf(9)!= -1)
        || (vetor.indexOf(1) != -1 && vetor.indexOf(5) != -1 && vetor.indexOf(9)!= -1) || (vetor.indexOf(3) != -1 && vetor.indexOf(5) != -1 && vetor.indexOf(7)!= -1)) 
        {
            return 1; //GANHOU!
        }

        else
        {
            return 0; 
        }
}
jogo();


$(document).ready(function(){
    var app = { //app é um objeto
        vetor: [1, 2, 3, 4, 5, 6, 7, 8, 9],

        init: function() {
            
             app.shuffle();
        },

        shuffle: function (){
            var random = 0;
            var temp = 0;

            for (i = 1; i < app.vetor.length; i++)
            {
                random = Math.round(Math.random() * i);   
                temp = app.vetor[i];
                app.vetor[i] = app.vetor[random];
                app.vetor[random] = temp;
            }
                    
            app.clickHandlers();
        },

        clickHandlers: function () 
        {
            $('.card').on('click', function() {
                $(this).addClass('selected');
                app.colore();
            })
        },

        colore: function()
        {
            if ($('.selected').length === 2)
            {   
                console.log("EU CHEGO AQUI SABIA");
                $('.selected').first().css("background-color", "yellow"); //COLORE COM A COR DO PRIMEIRO
                $('.selected').last().css("background-color", "green"); //COLORE COM A COR DO SEGUNDO
                $('.card').removeClass('selected');
            } 
        },

        checkWin: function()
        {
            
        }
    };

    app.init();
});