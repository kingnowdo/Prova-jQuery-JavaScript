/* colunas:  (definidas pelos ids)
a oitavas
b quartas
c semi
d final
e vencedor
f final
g semi
h quartas
i oitavas
*/
function animação(item){

}

function proxColuna(coluna){
    switch (coluna) {
        case 'a':
            return 'b';
            break;
    
        case 'b':
            return 'c';
            break;
    
        case 'c':
            return 'd';
            break;
    
        case 'd':
            return 'e';
            break;
    
        case 'f':
            return 'e';
            break;
    
        case 'g':
            return 'f';
            break;
    
        case 'h':
            return 'g';
            break;
    
        case 'i':
            return 'h';
            break;
    
        default:
            return coluna;
            break;
    }
}

function proxLinha(linha){
    return parseInt( ( parseFloat(linha) + 1.0 ) /2 );
}

const indefinido = "imagens/interrogacao.png";
const win = "imagens/win.png";
function clique(item){
    if(item.src==indefinido){ //impedir continuar se foi clicado em algum não definido
        return 0;
    }

    animação(item); //Uma animação para ser executada quando for dado um clique
    
    var coluna = item.id[0];
    var linha = item.id[1];
    if(item.src != $('#'+proxColuna(coluna)+proxLinha(linha)).attr('src')){ //se nao for repitindo
        if( $('#'+proxColuna(coluna)+proxLinha(linha)).attr('src')== indefinido || $('#'+proxColuna(coluna)+proxLinha(linha)).attr('src')== win ) $('#'+proxColuna(coluna)+proxLinha(linha)).attr({'src':item.src});
        else if( $('#'+proxColuna(proxColuna(coluna))+proxLinha(proxLinha(linha))).attr('src')== indefinido || $('#'+proxColuna(proxColuna(coluna))+proxLinha(proxLinha(linha))).attr('src')== win) $('#'+proxColuna(coluna)+proxLinha(linha)).attr({'src':item.src});
        else {
            var pColuna = proxColuna(coluna);
            var pLinha = proxLinha(linha);
            $('#'+pColuna+pLinha).attr({'src':item.src});
            pColuna = proxColuna(pColuna);
            pLinha = proxLinha(pLinha);
            if($('#'+pColuna+pLinha).attr('src')!= indefinido && $('#'+pColuna+pLinha).attr('src')!= win){
                $('#'+pColuna+pLinha).attr({'src':item.src});
                pColuna = proxColuna(pColuna);
                pLinha = proxLinha(pLinha);
                if($('#'+pColuna+pLinha).attr('src')!= indefinido && $('#'+pColuna+pLinha).attr('src')!= win){
                    $('#'+pColuna+pLinha).attr({'src':item.src});
                    pColuna = proxColuna(pColuna);
                    pLinha = proxLinha(pLinha);
                    if($('#'+pColuna+pLinha).attr('src')!= indefinido && $('#'+pColuna+pLinha).attr('src')!= win){
                        $('#'+pColuna+pLinha).attr({'src':item.src});
                    }
                }
            }

        }
    }
}


// Mostrar nome no rodape
function mostrarNomeRodape(){
    nomedousuario = document.getElementById("campo").value;
    document.getElementById("nomeElaboradoPor").innerHTML = "Elaborado pelo chef " + nomedousuario;

    // remover o botao e o formulario
    document.getElementById("campo").remove();
    document.getElementById("botaoEnviarNomeUsuario").remove();
}