function solucao(ano) {
    let cont = 2014;
    if (ano % 2 === 0) {
	    while (cont < ano){
            cont += 4;
        }
        if(cont == ano ){
            console.log("COPA");
        }
        else{
            console.log("JOGOS");
        }
    }
    else {
        console.log("MEH");
    }
}