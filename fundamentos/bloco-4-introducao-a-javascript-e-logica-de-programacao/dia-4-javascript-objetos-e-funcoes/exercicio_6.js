function verificaFimPalavra(comeco, fim) {
    let situacao = false;
    if (comeco[comeco.length] == fim[fim.length]) {
        if (comeco[comeco.length - 1] == fim[fim.length - 1]) {
            situacao = true;
        }
    }
    return situacao;
}

console.log(verificaFimPalavra('joaofernando', 'fernan'));
