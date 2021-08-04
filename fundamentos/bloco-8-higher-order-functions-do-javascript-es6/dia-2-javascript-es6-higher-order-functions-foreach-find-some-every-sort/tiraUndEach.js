const numero = [4, 3, 5, 67, 8, 9, 8, 4];
const se = (numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} é divísivel por 2!`);
    }
};


numero.forEach(se);


// ou


numero.forEach((element) => {
    if (element % 2 === 0) {
        console.log(`${element} é divísivel por 2!`);
    }
});