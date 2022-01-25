function positivoNegativo(numero) {

    if(numero > 0) return 'positivo';
    else if(numero < 0) return 'negativo';
    else return 'neutro';
}


module.exports = positivoNegativo;