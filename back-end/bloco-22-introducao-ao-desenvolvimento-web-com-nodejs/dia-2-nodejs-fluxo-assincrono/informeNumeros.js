const fs = require('fs').promises;

const recebeNumeros = (n1,n2,n3) => {
    const numeros = [n1,n2,n3];
    const promise = new Promise ((resolve, reject) => {
        numeros.map((numero) => {
            if(Number.isInteger(numero) === false) reject(new Error(`${numero} não é um número!`))
        });
        const soma = (n1+n2)*n3;
        resolve(`Soma: ${soma}`);
    });
    return promise;
}

recebeNumeros(1,4,3) 
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));