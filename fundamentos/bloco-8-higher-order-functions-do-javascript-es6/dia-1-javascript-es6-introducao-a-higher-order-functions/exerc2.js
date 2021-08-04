const verifica = (num, numero) => num === numero;



const rand = (num,callback) => {
    const numero = Math.floor((Math.random() * 5) + 1);
    return callback(num, numero) ? 'Parabéns' : 'Opa';
} 


console.log(rand(2,verifica));
