function solucao(letra, palavras) {
    let losers = 0;
    for (let palavra of palavras){
        if (palavra[0] != letra) {
            losers++;
        }
    }
    console.log(losers);
}