const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const leFuncao4 = require('./exercicio4');

describe('Verifica funcao leFuncao4 ', () => {
    describe('Verifica se existe ', () => {
        before(() => {
            sinon.stub(fs, 'writeFileSync');
        });
        after(() => {
            fs.writeFileSync.restore();
        });
    });
    describe('Verificações ', () => {
        it('Verifica se retorna uma string ', () => {
            const resposta = leFuncao4('arq.txt', 'oi');

            expect(resposta).to.be.a('string');
        });
        it('Se retorna positivo ', () => {
            const resposta = leFuncao4('arq.txt', 'oi');
            expect(resposta).to.be.equals('ok');
        })
    })
})