const router = require('express').Router();
const { validateName, validateEmail, validadePassword, geraStringAleatoria } = require('./validateRegister');

const register = [

];


router.get('/', function (_req, res) {
    res.status(200).json(register);
});

router.post('/register', validateName, validateEmail, validadePassword, function (req, res) {
    const { name, email, password } = req.body;
    const passStr = password.toString();
    register.push({ name, email, passStr });
    res.status(201).json({ message: 'user created' });
});

router.post('/login', validateEmail, validadePassword, function (req, res) {
    const randomToken = geraStringAleatoria(12);
    res.status(200).json({ token: randomToken });
});

module.exports = router;
