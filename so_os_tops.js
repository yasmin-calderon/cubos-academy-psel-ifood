function solucao(produtos) {
	let totalT = 0;
    let total = 0;
    for (let produto of produtos) {
        total += produto.preco;
        if (produto.preco >= 10000) {
            totalT += produto.preco;
        }
    }
    const resposta = {
        totalTop: totalT,
        percentual: totalT / total
    };
    console.log(resposta);
}