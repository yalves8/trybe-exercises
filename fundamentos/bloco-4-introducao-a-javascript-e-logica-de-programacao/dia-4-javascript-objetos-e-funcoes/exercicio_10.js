function vetorPar(vector) {
    let tamanho = 0;
    let pares = [];
    let inst;
    for (let i in vector) {
        inst = 0; //seta para nao acumular
        tamanho = vector[i].length;
        inst = vector[i];  //recebe o vetor da vez e isnt vira um vetor
        for (let bloco = 0; bloco <= tamanho; bloco += 1) { //percorre inst ate o tamanho do bloco atual
            if (inst[bloco] % 2 == 0) {
                pares.push(inst[bloco]);
            }
        }
    }
    return pares;
}


console.log(vetorPar([[1, 2], [3,4,5,6], [7,8,9,10]]));
