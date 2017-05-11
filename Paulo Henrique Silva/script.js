function reseta() {
    for(var i=0;i<2;i++){
        for(var j=0;j<2;j++){
            player1[i][j]=0;
            player2[i][j]=0;
        }
    }
}

function atualizaplacar(){
    document.getElementById("placarum").innerHTML = "hello";
    document.getElementById("placardois").innerHTML = placar[1];
}

function atualizanomeum(){
    var x = document.getElementById("playerum").value;
    document.getElementById("nomeum").innerHTML = x+" :";
}

function atualizanomedois(){
    var x = document.getElementById("playerdois").value;
    document.getElementById("nomedois").innerHTML = x+" :";
}

function alguemganhou() {
    if(
        ((player1[0][0]==1 && player1[0][1]==1 && player1[0][2])==1) ||
        ((player1[1][0]==1 && player1[1][1]==1 && player1[1][2])==1) ||
        ((player1[2][0]==1 && player1[2][1]==1 && player1[2][2])==1) ||
        ((player1[0][0]==1 && player1[1][1]==1 && player1[2][2])==1) ||
        ((player1[0][2]==1 && player1[2][2]==1 && player1[2][0])==1))
    {
        return 1;
    }
    else if(
        ((player2[0][0]==1 && player2[0][1]==1 && player2[0][2])==1) ||
        ((player2[1][0]==1 && player2[1][1]==1 && player2[1][2])==1) ||
        ((player2[2][0]==1 && player2[2][1]==1 && player2[2][2])==1) ||
        ((player2[0][0]==1 && player2[1][1]==1 && player2[2][2])==1) ||
        ((player2[0][2]==1 && player2[2][2]==1 && player2[2][0])==1))
    {
        return 2;
    }   return 0;
}

var player1 =[0,0,0];
player1[0] = [0,0,0];
player1[1] = [0,0,0];
player1[2] = [0,0,0];
var player2 =[0,0,0];
player2[0] = [0,0,0];
player2[1] = [0,0,0];
player2[2] = [0,0,0];

var placar = [0,0];

var rodada=true;

$(document).ready(function(){

    $( "#aa" ).click(function() {
        if(player1[0][0]==0 && player2[0][0]==0){
            if(rodada){
  	            $("#aa").css("background-image", "url(o.jpg)");
                player1[0][0]=1;
            }
            else{
                $("#aa").css("background-image", "url(x.jpg)");
                player2[0][0]=1;
            }
            rodada=!rodada;
        }
    });

    $( "#ab" ).click(function() {
        if(player1[0][1]==0 && player2[0][1]==0){
            if(rodada){
  	            $("#ab").css("background-image", "url(o.jpg)");
                player1[0][1]=1;
            }
            else{
                $("#ab").css("background-image", "url(x.jpg)");
                player2[0][1]=1;
            }
            rodada=!rodada;
        }
    });

    $( "#ac" ).click(function() {
        if(player1[0][2]==0 && player2[0][2]==0){
            if(rodada){
  	            $("#ac").css("background-image", "url(o.jpg)");
                player1[0][2]=1;
            }
            else{
                $("#ac").css("background-image", "url(x.jpg)");
                player2[0][2]=1;
            }
            rodada=!rodada;
        }
    });

    $( "#ba" ).click(function() {
        if(player1[1][0]==0 && player2[1][0]==0){
            if(rodada){
  	            $("#ba").css("background-image", "url(o.jpg)");
                player1[1][0]=1;
            }
            else{
                $("#ba").css("background-image", "url(x.jpg)");
                player2[1][0]=1;
            }
            rodada=!rodada;
        }
    });

    $( "#bb" ).click(function() {
        if(player1[1][1]==0 && player2[1][1]==0){
            if(rodada){
  	            $("#bb").css("background-image", "url(o.jpg)");
                player1[1][1]=1;
            }
            else{
                $("#bb").css("background-image", "url(x.jpg)");
                player2[1][1]=1;
            }
            rodada=!rodada;
        }
    });

    $( "#bc" ).click(function() {
        if(player1[1][2]==0 && player2[1][2]==0){
            if(rodada){
  	            $("#bc").css("background-image", "url(o.jpg)");
                player1[1][2]=1;
            }
            else{
                $("#bc").css("background-image", "url(x.jpg)");
                player2[1][2]=1;
            }
            rodada=!rodada;
        }
    });

    $( "#ca" ).click(function() {
        if(player1[2][0]==0 && player2[2][0]==0){
            if(rodada){
  	            $("#ca").css("background-image", "url(o.jpg)");
                player1[2][0]=1;
            }
            else{
                $("#ca").css("background-image", "url(x.jpg)");
                player2[2][0]=1;
            }
            rodada=!rodada;
        }
    });

    $( "#cb" ).click(function() {
        if(player1[2][1]==0 && player2[2][1]==0){
            if(rodada){
  	            $("#cb").css("background-image", "url(o.jpg)");
                player1[2][1]=1;
            }
            else{
                $("#cb").css("background-image", "url(x.jpg)");
                player2[2][1]=1;
            }
            rodada=!rodada;
        }
    });

    $( "#cc" ).click(function() {
        if(player1[2][2]==0 && player2[2][2]==0){
            if(rodada){
  	            $("#cc").css("background-image", "url(o.jpg)");
                player1[2][2]=1;
            }
            else{
                $("#cc").css("background-image", "url(x.jpg)");
                player2[2][2]=1;
            }
            rodada=!rodada;
        }
    });

});