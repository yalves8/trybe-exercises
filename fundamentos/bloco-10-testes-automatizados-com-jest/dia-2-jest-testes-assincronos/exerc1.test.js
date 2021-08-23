const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

describe('Testing a string to uppercase', () => {
    it('Everithing to uppercase', (done) => {
        uppercase('yasmin', (resultado) => {
            try {
                expect(resultado).toMatch('YASMIN');
                done();
            } catch (error) {
                done(error);
            }
        });
    })
});