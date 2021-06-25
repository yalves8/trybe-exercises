let n = 8;
let carac = "*";
let padrao = '';
if (n > 1) {
    for (let i = 1; i <= n; i += 1) {
        padrao = '';
        for (let j = 1; j <= n; j += 1) {
            padrao += '*';

        }
        console.log(padrao);
    }
}