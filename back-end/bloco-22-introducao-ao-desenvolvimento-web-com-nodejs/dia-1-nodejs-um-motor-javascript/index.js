const { questionInt } = require('readline-sync');
const { convertImc } = require('./imc');
const { sorte } = require('./sorteio');

const escolha = () => {
    console.log('1 - Calcular Imc');
    console.log('2 - Sorteio');
    console.log('3 - sair');
    const resposta = questionInt('Digite qual script deseja executar:  ');
    switch (resposta) {
        case 1:
            console.log(`IMC = ${convertImc()}`);
            return escolha();

        case 2:
            sorte();
            return escolha();

        case 3:
            break;

        default:
            return escolha();
    }
}

escolha();
