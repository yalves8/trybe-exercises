function somatorio(n) {
    let somaTudo = 0;
    for (let soma = 1; soma <= n; soma += 1) {
        somaTudo += soma;
    }
    return somaTudo;
}

let n = 5;
console.log(somatorio(n));