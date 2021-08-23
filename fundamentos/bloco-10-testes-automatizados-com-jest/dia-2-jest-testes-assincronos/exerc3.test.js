const { findUserById, getUserName } = require('./exerc23.js');

describe('Test if id is find', () => {

    

    describe('Retorna id se existe', () => {
        it('Return id if exist', async () => {
            await expect(findUserById(1)).resolves.toBeTruthy();
        });
    });


    describe('Quando o id não existe', () => {
        it('retorna um erro', async () => {
            await expect(findUserById(3)).rejects.toEqual(new Error('User with 3 not found.'));
        });
    });


});