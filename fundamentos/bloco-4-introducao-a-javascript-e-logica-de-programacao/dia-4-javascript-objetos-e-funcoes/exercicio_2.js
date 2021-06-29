function palindromo(nome) {
    let tamanho = nome.length - 1;
    let situacao = false;
    let cont = 0;
    for (let i = 0; i < tamanho; i += 1) {
        if (nome[tamanho - i] == nome[0 + i]) {
            cont += 1;
        }

    }
    if (cont == tamanho) {
        situacao = true;
    }
    return situacao;

}

console.log(palindromo("desenvolvimento"));