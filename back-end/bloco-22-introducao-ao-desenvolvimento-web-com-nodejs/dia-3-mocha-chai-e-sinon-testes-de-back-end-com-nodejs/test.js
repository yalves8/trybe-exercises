const { expect } = require('chai');
const leFuncao = require('./exercicio1');

describe('Verifica funcao ', () => {
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
});
