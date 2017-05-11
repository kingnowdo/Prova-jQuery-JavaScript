function checaJogadas(jogadas){
	var j1=false,j2=false;

	//verifica horizontalmente	
	for(var i=0;i<9;i+=3){
		if(jogadas[i]=='x' && jogadas[i+1]=='x' && jogadas[i+2]=='x'){
			j1=true;
		}
		else if(jogadas[i]=='o' && jogadas[i+1]=='o' && jogadas[i+2]=='o'){
			j2=true;
		}
	}

	//verifica verticalmente
	for(var i=0;i<3;i++){
		if(jogadas[i]=='x' && jogadas[i+3]=='x' && jogadas[i+6]=='x'){
			j1=true;
		}
		else if(jogadas[i]=='o' && jogadas[i+3]=='o' && jogadas[i+6]=='o'){
			j2=true;
		}
	}
	//verifica diagonais
	if((jogadas[0]=='x' && jogadas[4]=='x' && jogadas[8]=='x')  || (jogadas[2]=='x' && jogadas[4]=='x' && jogadas[6]=='x'))
		j1=true;
	else if((jogadas[0]=='o' && jogadas[4]=='o' && jogadas[8]=='o')  || (jogadas[2]=='o' && jogadas[4]=='o' && jogadas[6]=='o'))
		j2=true;

	if(j1)
		return 1;
	else if(j2)
		return 2;
	else
		return 0;
}