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

    for (let j = 1; j <= n - i; j += 1) { //vai de 1 até n - i para colocar os espaços
        espaco += ' '; //seta o espaço sempre pra não acumular
        if (j == n - i) {  // quando chega no limite, usa o restante do tamanho para colocar os asteristicos
            for (let y = j; y < n; y += 1) {
                espaco += '*';
            }
            console.log(espaco);
        }
    }


}
