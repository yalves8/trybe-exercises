const { expect } = require('chai');
const leFuncao = require('./exercicio1');
const leFuncao4 = require('./exercicio4');

/* describe('Verifica funcao leFuncao', () => {
    describe('Quando a funcao existe ', () => {
        describe('Resposta ', () => {
            it('Se é uma string ', () => {
                const resposta = leFuncao(2);
                expect(resposta).to.be.a('string');
            });
            it('Se retorna positivo ', () => {
                const resposta = leFuncao(3);
                expect(resposta).to.be.equals('positivo');
            })
        });
    });
}); */

describe('Verifica leFuncao4 ', () => {
    describe('Quando a funcao existe ', () => {
        it('Verifica se retorna string ', () => {
            const resposta = leFuncao4('arq2.txt', 'oi');
            expect(resposta).to.be.a('string');
        });
        it('Verifica se retorna ok ', () => {
            const resposta = leFuncao4('arq2.txt', 'oi');
            expect(resposta).to.be.equals('ok');
        });

    });
});
