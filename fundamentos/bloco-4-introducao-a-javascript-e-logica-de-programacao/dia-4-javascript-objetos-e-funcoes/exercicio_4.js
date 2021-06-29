function indiceNumeroMenor(array) {
    let maior = Math.min.apply(null, array);
    for (let i in array) {
        if (array[i] == maior) {
            return i;
        }
    }



}

teste = [2, 3, 6, 7, 10, 1];
console.log(indiceNumeroMenor(teste));