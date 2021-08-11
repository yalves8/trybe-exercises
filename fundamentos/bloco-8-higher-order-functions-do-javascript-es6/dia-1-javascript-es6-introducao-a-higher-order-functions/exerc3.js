const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const contaPontos = (array) =>  {
    let soma = 0;
    for(let i = 0; i < array.length; i += 1){
        soma += array[i];
    }
    return soma;
}

const respostas = (corretas,verificadas,funcContaCorr) => {
    const resposta = corretas.map((elem, index) => {
        if(verificadas[index] === 'N.A') return 0;
        else if(verificadas[index] === elem) return 1;
        return -0.5;
    });

    return funcContaCorr(resposta);

}

console.log(respostas(RIGHT_ANSWERS,STUDENT_ANSWERS,contaPontos));