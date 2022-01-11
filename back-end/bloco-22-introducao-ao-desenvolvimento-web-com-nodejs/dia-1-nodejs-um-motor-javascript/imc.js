const {questionInt, questionFloat} = require('readline-sync');




const convertImc = () => {
    const euPeso = questionInt('Qual seu peso? ');
    const euAltura = questionFloat('Qual sua altura? ');
    const calculo = ((euPeso * euAltura)/2);
    return calculo;
}

module.exports = {convertImc};