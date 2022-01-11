const {questionInt, question} = require('readline-sync');

const sorte = () => {
    const numero = Math.round(Math.random() * (10-0) + 0);
    const pergNum = questionInt('Qual numero? ');
    if(numero === pergNum) {
        return console.log('Parabéns!');
    }else {
        console.log('Errou!! ');
        const pergunta = question('Deseja tentar novamente? (y/n) ');
        if(pergunta === 'y') return sorte();
    }
}

sorte();
