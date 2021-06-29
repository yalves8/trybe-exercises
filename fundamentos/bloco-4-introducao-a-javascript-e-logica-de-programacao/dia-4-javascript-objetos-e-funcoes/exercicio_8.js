
let array = [10, 10, 10, 10, 7, 7, 1];
let cont = 0;
let vetor = [];
let vetorCont = [];
let num = 0;
for (let i = 0; i < array.length; i += 1) {
    cont = 0; //seta para nao acumular
    for (let rep = 0; rep < array.length; rep += 1) {
        if (array[i] == array[rep]) { //verifica se sao iguais
            if (i != rep) { // verifica se os indices sao iguais
                cont += 1;
            }

        }

    }
    vetor.push(cont);

}

let max = Math.max.apply(null, vetor); //pega o numero maior das repeticoes

console.log(max);

for (let indice in vetor) {  //procura no vetor feito os indices

    if (vetor[indice] == max) { //se o valor for o numero max de repeticao
        console.log(array[indice]); // pega o indice do valor e puxa o mesmo indice do array
        return;
    }
}






