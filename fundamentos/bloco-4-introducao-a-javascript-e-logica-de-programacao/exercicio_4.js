let n = 11;
let espaco = '';

/* let arredonda = Math.round(n/2);
console.log(arredonda); */
let arrendonda = Math.round(n / 2);

for (let i = 1; i <= n; i += 1) {
    espaco = '';
    for (let j = 1; j <= n; j += 1) {
        espaco = '';
        if (j == arrendonda + 1) {

            for (let asteristico = 0; asteristico < n; asteristico += 1) {
                espaco += '*';
            }

            return;
        }
        if (j == 1) {

            for (let y = 1; y <= n; y += 1) {
                if (y == arrendonda) {
                    espaco += '*';
                }
                else {
                    espaco += ' ';
                }



            }


        }
        else {

            for (let k = 1; k <= n; k += 1) {

                if (k >= arrendonda - (j - 1) && k <= arrendonda + (j - 1)) {
                    espaco += '*';
                }
                else {
                    espaco += ' ';
                }



            }

        }

        console.log(espaco);

    }

}