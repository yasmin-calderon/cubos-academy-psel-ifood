function solucao(largura, altura) {
    if (largura === altura) {
        console.log("QUADRADA");
    }
    else if (largura > altura) {
        console.log("PAISAGEM");
    }
    else {
        console.log("RETRATO");
    }
}