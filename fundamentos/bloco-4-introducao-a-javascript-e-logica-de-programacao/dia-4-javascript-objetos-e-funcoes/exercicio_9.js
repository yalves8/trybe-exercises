function maiorNome(array){
    let cont = 0;
    let vetor = [];
    for(let i = 0 ; i < array.length ; i +=1){
        cont = 0;
        cont += array[i].length;
        vetor.push(cont);
    }
    
    let max = Math.max.apply(null,vetor);
    let indice = vetor.indexOf(max);
    return array[indice];
}

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(teste));

