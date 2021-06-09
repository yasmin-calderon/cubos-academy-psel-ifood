function solucao(tempo, distancia) {
	let centavos = 600;
    if (tempo >= 5) {
        if (tempo <= 60) {
            centavos = tempo * 100 + distancia * 50;
        }
        else if (distancia < 100) {
            centavos = distancia * 200;
        }
        else {
            centavos = distancia * 150;
        }
    }
    console.log (centavos);
}