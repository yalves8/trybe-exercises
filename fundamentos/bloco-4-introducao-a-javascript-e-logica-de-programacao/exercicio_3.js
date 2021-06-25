let n = 8;
let espaco = ' ';

for (let i = 1; i <= n; i += 1) {
    espaco = ' ';
    if (i == n) { //quando i == n, não tem espaço
        for (let u = 1; u <= n; u += 1) {
            espaco += '*';
        }
        console.log(espaco);
    }

    for (let colocaEspaco = 1; colocaEspaco <= n - i; colocaEspaco += 1) { //vai de 1 até n - i para colocar os espaços
        espaco += ' '; //seta o espaço sempre pra não acumular
        if (colocaEspaco == n - i) {  // quando chega no limite, usa o restante do tamanho para colocar os asteristicos
            for (let colocaAsteristico = colocaEspaco; colocaAsteristico < n; colocaAsteristico += 1) {
                espaco += '*';
            }
            console.log(espaco);
        }
    }


}
