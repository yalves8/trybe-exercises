const res = require("express/lib/response");

//exercicio1
function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
};


function validateName(req, res, next) {
    const { name } = req.body;
    if (!name || name === '' || name.length <= 3) return res.status(400).json({ message: 'Invalid name!' });

    next();
};

function validateEmail(req, res, next) {
    const { email } = req.body;
    const MAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || email === '' || !email.match(MAIL_REGEX)) return res.status(400).json({ message: 'Invalid email!' });
    next();
};

function validadePassword(req, res, next) {
    const { password } = req.body;
    const passReg = /^[0-9]*$/;
    if (!password.match(passReg) ||
        password.length < 4 ||
        password.length > 8) return res.status(400).json({ message: 'Invalid password!' });
    next();

};

//exercicio2
function validateToken(req, res, next) {
    const token = req.headers.authorization;
    const regexTok = !/^[a-zA-Z0-9]{12}$/;
    if (!token || token.match(regexTok))
        return res.status(401).json({ message: 'invalid token' });

    next();
}


module.exports = {
    validateName,
    validateEmail,
    validadePassword,
    geraStringAleatoria,
    validateToken,
};