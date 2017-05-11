function isNumber(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function disable(){
    	document.getElementById('inputN').disabled = true;
    }

	function able(){
    	document.getElementById('inputN').disabled = false;
    }

	function compara(){
    	if (document.getElementById('mod2').checked) {
        	var x = document.getElementById('inputX').value;
            if(isNumber(x))
            {
     			if (isDivisible(x,2))
        	    {
    	        	document.write( x + " � divis�vel por 2<br>");
	            }
            	else
        	    {
    	        	document.write( x + " n�o � divis�vel por 2<br>");
	            }
            }
            else
            {
            	alert("*** por favor colocar valores num�ricos como input ***");
            }
        }
    	if (document.getElementById('modN').checked) {
        	var x = document.getElementById('inputX').value;
            var n = document.getElementById('inputN').value;
            if(isNumber(x) && isNumber(n))
            {
     			if (isDivisible(x,n))
        	    {
    	        	document.write( x + " � divis�vel por " + n + "<br>");
	            }
            	else
        	    {
    	        	document.write( x + " n�o � divis�vel por " + n + "<br>");
	            }
            }
            else
            {
            	alert("*** por favor colocar valores num�ricos como input ***");
            }
        }
	}

    function search(i)
    {
        return function getEquals(espaco){
            return espaco == i;
        }
    }

function imprimeJogoVelha(Xs,Os){
        var tab = "";
        for(var i=0;i<=8;i++)
        {
            if(Xs[i] == 1)
            {
                tab = tab.concat(" X");
            } else if(Os[i] == 1)
            {
                tab = tab.concat(" O");
            } else 
            {
                tab = tab.concat("  ");
            }
            if(i%3 != 2)
            {
                tab = tab.concat(" |");
            }
            if (i%3 == 2 && i%9 != 8)
            {
                tab = tab.concat("\n---+---+---\n");
            }
        }
        console.log(tab);
    }

    
    function isDivisible(a,b)
    {
    	return a%b === 0;
    }