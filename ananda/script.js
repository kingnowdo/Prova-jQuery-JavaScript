        var vetor = new Array(3); 
        for(b=0; b<3; b++) {
          vetor[b]= new Array(3);
       }

    for(a=0; a<9; a++) {
        console.log("Vez do jogador 1"); 
        var x = prompt("Linha");
        var y = prompt("Coluna");
        x = parseInt(x);
        y = parseInt(y);
      
//Verifica se essa opcao já foi escolhida
        if (vetor[x][y]!=1 && vetor[x][y]!=2) {
            vetor[x][y]=1;

        } 
        else {
            console.log("Essa posição não está disponível, perdeu a vez");
        }
//verifica se ganhou 
        vetor = VerificaGanhou1(vetor); 

      
      
        console.log("Vez do jogador 2");
        var x = prompt("Linha");
        var y = prompt("Coluna"); 
        x = parseInt(x);
        y = parseInt(y);
//Verifica se essa opcao já foi escolhida
        if (vetor[x][y]!=1 && vetor[x][y]!=2)  {
            vetor[x][y]=2;
            a=a+1;
        } 
        else {
            console.log("Essa posição não está disponível, perdeu a vez");
        }
//Verifica se ganhou 
        vetor = VerificaGanhou2(vetor); 


    } 


    function VerificaGanhou1(vetor) {
        var count=0;
        //verifica se alguem completou a linha
        for (i=0; i<3; i++) {
            for(j=0; j<3; j++) {
                if(vetor[i][j]==1) {
                    count= count+1;
                }
            }
            if(count==3) {
                console.log("Jogador 1 ganhou"); 
                vetor = reset(vetor,2);

            } 
            else {
                count=0;
            }
        }

        //verifica se alguem completou a coluna 
        for (j=0; j<3; j++) {
            for(i=0; i<3; i++) {
                if(vetor[i][j]==1) {
                    count= count+1;
                }
            }
            if(count==3) {
                console.log("Jogador 1 ganhou"); 
                vetor = reset(vetor,2);
            } 
            else {
                count=0;
            }
        }

        //Verifica se ganhou pela palavra que eu esqueci o nome agora(diagonal)

        var p=0, q=0;
        if((vetor[p][q]==1) && (vetor[p+1][q+1]==1) && (vetor[p+2][q+2]==1)) {
            console.log("Jogador 1 ganhou"); 
            vetor = reset(vetor,2);
        }

        var r=0, s=2;
        if((vetor[p][q]==1) && (vetor[p+1][q-1]==1) && (vetor[p+2][q-2]==1)) {
            console.log("Jogador 1 ganhou"); 
            vetor = reset(vetor,2);
        }
        
    }
    function VerificaGanhou2(vetor) {
        var count=0;
        //verifica se alguem completou a linha
        for (i=0; i<3; i++) {
            for(j=0; j<3; j++) {
                if(vetor[i][j]==2) {
                    count= count+1;
                }
            }
            if(count==3) {
                console.log("Jogador 2 ganhou");
                vetor = reset(vetor,2);
            } 
            else {
                count=0;
            }
        }

        //verifica se alguem completou a coluna 
        for (j=0; j<3; j++) {
            for(i=0; i<3; i++) {
                if(vetor[i][j]==2) {
                    count= count+1;
                }
            }
            if(count==3) {
                console.log("Jogador 2 ganhou"); 
                vetor = reset(vetor,2);
            } 
            else {
                count=0;
            }
        }
        //Verifica se ganhou pela palavra que eu esqueci o nome agora(diagonal)

        var p=0, q=0;
        if((vetor[p][q]==2) && (vetor[p+1][q+1]==2) && (vetor[p+2][q+2]==2)) {
            console.log("Jogador 2 ganhou"); 
            vetor = reset(vetor,2);
        }

        var r=0, s=2;
        if((vetor[p][q]==2) && (vetor[p+1][q-1]==2) && (vetor[p+2][q-2]==2)) {
            console.log("Jogador 2 ganhou"); 
            reset(vetor,2);
            vetor = reset(vetor,2);
        }
        
        return vetor; 

    }

    function reset (vetor, i) {
         for (j=0; j<3; j++) {
            for(i=0; i<3; i++) {
                vetor[i][j] = 0;
            }
         }

        return vetor; 
    }