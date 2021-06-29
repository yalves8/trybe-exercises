
let numeros = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000

};


let indice = 0;
let array = [];
let numero = 'IX';
let operacao = 0;
for (let i = 0; i <= numero.length - 1; i += 1) {
    for (let j in numeros) {
        if (numero[i] == j) {
            array.push(numeros[j])
        }
    }

}

if(array[1] < array[0]){
    operacao = array[1] + array[0];
}
else if(array[1] > array[0]){
    operacao = array[1] - array[0];
}
else{
    operacao = array[1] - array[0];
}

console.log(operacao);




