//constantes para usar na dinamica e no compartilhamento //##### poderia virar um dicionário
const itens = ['0','1','2']
const item01 = '0'
const item02 = '1'
const item03 = '2'
const item04 = '3'
const item05 = '4'
const item06 = '5'
const item07 = '6'
const item08 = '7'
const item09 = '8'
const item10 = '9'
const item11 = 'a'
const item12 = 'b'
const item13 = 'c'
const item14 = 'd'
const item15 = 'e'
const item16 = 'f'

//variaveis que guardam o estado dos vecedores de cada fase
var oitavas = "????????"
var quartas = "????"
var semi = "??"
var final = "?"

function regras(){ //Exibir as regras

}

function compartilhar(){

}

function inserir_nome(){ //Função que pega o nome do campo de texto e coloca no rodapé

}

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
            break;
    }
}

function proxLinha(linha){
    return parseInt( ( parseFloat(item.id[1]) + 1.0 ) /2 );
}

function qualItem(id){

}

function clique(item){
    if(item.src=="desconhecido.png"){ //impedir continuar se foi clicado em algum não definido
        return 0;
    }

    animação(item); //Uma animação para ser executada quando for dado um clique
    
    console.log(item.id); ///////////////
    console.log(parseInt( ( item.id[1])  ));
    console.log(parseInt( ( parseFloat(item.id[1]) + 1.0 ) /2 ));
    
    var coluna = item.id[0];
    var linha = item.id[1];
    if(coluna != 'e'){ //não for o vencedor
        var idVencedor = "#??" //armazenar o id que sera alterado apos esse clique
        idVencedor[1]= proxColuna(item.id[0]);
        idVencedor[2]= proxLinha(item.id[1]);

        var linha = proxLinha();
        if(coluna=='a'||coluna=='i') oitavas[linha]=qualItem(coluna+linha);

    }
    
    
}