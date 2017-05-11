function geraMatrizvazia(){
    var matriz=[];
    for(var i =0 ; i< 3;i++){
        matriz[i]=[];
        for(var j=0;j< 3;j++){
            matriz[i][j]={
                value: "-",
                status: "inativo"
            };
        }
    }
    return matriz;
}

function imprime(matriz){
    console.log("| "+matriz[0][0].value+" | "+matriz[0][1].value+" | "+matriz[0][2].value+" |");
    console.log("| "+matriz[1][0].value+" | "+matriz[1][1].value+" | "+matriz[1][2].value+" |");
    console.log("| "+matriz[2][0].value+" | "+matriz[2][1].value+" | "+matriz[2][2].value+" |");
    console.log("");
}

function marca(matriz,cordx,cordy,jogador){
    if(matriz[cordx][cordy].status == "inativo"){
        matriz[cordx][cordy].value=jogador.value;
        matriz[cordx][cordy].status= "ativo";
    return matriz;
}
}

function confere(matriz,jogador){
    
    var string="";
    var jogadorcomb = jogador.value+jogador.value+jogador.value;
    var resp=false;
    for(var i=0;i<3;i++){
        for(var j =0;j<3;j++){
            string = string + matriz[i][j].value;
        }
        if(string == jogadorcomb){
            resp= true;
        }
        else{
            string="";
        }
    }

    //vertical
    for(var i=0;i<3;i++){
        for(var j =0;j<3;j++){
            string = string + matriz[j][i].value;
        }
        
        if(string == jogadorcomb){
            resp = true;
        }
        else{
            string="";
        }
    }

    //diagonal
    var total=9;
    var diag1 = "";
    var diag2 = "";
    for(var i=0;i<3;i++){
        for(var j =0;j<3;j++){
            if(i==0 && j==2){
                diag2 = diag2+matriz[i][j];
            }
            if(i==j){
                diag1= diag1+matriz[i][j];
                diag2= diag2+matriz[i][j];
            }
            if(i==2 && j==0){
                diag2= diag2+matriz[i][j];
            }
        }
    }
    if(diag1 == jogadorcomb || diag2 == jogadorcomb){
        resp = true;
    }
    return resp;
    
    }

    j1={
        nome: "Wender",
        value: "X"
    };
    j2={
        nome: "Vitor",
        value: "O"
    };

    var matriz = geraMatrizvazia();
    imprime(matriz);
    
    //Exemplo de Jogo Com Vitória
    //JOGADOR 1
    matriz=marca(matriz,0,0,j1);
    u=confere(matriz,j1);
    if(u == false){

        imprime(matriz);
        total--;
        if(total == 0){
            alert("Deu Velha");
        }
    }
    else{
        alert("Acabou");
        imprime(matriz);
        matriz=geraMatrizvazia();
    }
    //JOGADOR 2
    matriz=marca(matriz,1,0,j2);
    u=confere(matriz,j2);
    if(u == false){
        
    imprime(matriz);
        total--;
        if(total == 0){
            alert("Deu Velha");
        }    
    }
    else{
        imprime(matriz);
        
        alert("Acabou");
        matriz=geraMatrizvazia();
    }
    //JOGADOR 1
    matriz=marca(matriz,0,1,j1);
    u=confere(matriz,j1);
    if(u == false){
        
    imprime(matriz);
        total--;
        if(total == 0){
            alert("Deu Velha");
        }
        
    }
    else{
        imprime(matriz);
        
        alert("Acabou");
        matriz=geraMatrizvazia();
    }
    //JOGADOR 2
    matriz=marca(matriz,2,1,j2);
    u=confere(matriz,j2);
    if(u == false){

    imprime(matriz);
        total--;
        if(total == 0){
            alert("Deu Velha");
        }
    }
    else{
        imprime(matriz);
        alert("Acabou");
        matriz=geraMatrizvazia();
    }
    //JOGADOR 1
    matriz=marca(matriz,0,2,j1);
    u=confere(matriz,j1);
    if(u == false){

    imprime(matriz);
        total--;
        if(total == 0){
            alert("Deu Velha");
        }
    }
    else{
        imprime(matriz);
        alert("Acabou");
        matriz=geraMatrizvazia();
    }