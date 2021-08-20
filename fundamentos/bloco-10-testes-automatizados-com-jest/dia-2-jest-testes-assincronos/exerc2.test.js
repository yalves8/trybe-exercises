const { findUserById, getUserName} = require('./exerc23.js');

describe('Test if id is find', () => {
    it('Return id if exist', () => {
        const expec = [ 
            {id: 1 , name: 'Mark'},
        ];
        return expect(findUserById(3)).resolves.toBeTruthy();
    });

    it('Quando o id não existe', () => {
        expect(findUserById(3)).rejects.toEqual(new Error('User with 3 not found.'));
    })
});