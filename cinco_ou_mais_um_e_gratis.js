function solucao(precos) {
    let total = 0;
    let menor = precos[0];
    for (let preco of precos) {
        total +=preco;
        if(preco < menor && precos.length >= 5) {
            menor = preco;    
        }
    }
    if (precos.length >= 5) {
        total -= menor;
    }
    console.log(total);
}