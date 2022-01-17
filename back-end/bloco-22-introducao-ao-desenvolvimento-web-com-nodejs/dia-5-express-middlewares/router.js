const router = require('express').Router();
const axios = require('axios');

const { validateName,
    validateEmail,
    validadePassword,
    geraStringAleatoria,
    validateToken } = require('./validateRegister');

const register = [

];

const posts = [
    {
        id: 1, name: 'Yasmin', post: 'Bom dia'
    },
    {
        id: 2, name:'Leticia', post: 'Boa Tarde'
    },
    {
        id:3, name:'Trybe', post:'VQV'
    },
];

//exercicio1
/* router.get('/', function (_req, res) {
    res.status(200).json(register);
}); */

router.post('/register', validateName, validateEmail, validadePassword, function (req, res) {
    const { name, email, password } = req.body;
    const passStr = password.toString();
    register.push({ name, email, passStr });
    res.status(201).json({ message: 'user created' });
});

router.post('/login', validateEmail, validadePassword, function (_req, res) {
    const randomToken = geraStringAleatoria(12);
    res.status(200).json({ token: randomToken });
});

//exercicio2
router.get('/price', validateToken, async function(_req,res) {
    const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    res.status(200).json(result.data);
 
});

//exercicio3
router.get('/:id', function(req,res) {
    const {id} = req.params;
    const findId = posts.find((user) => user.id === parseInt(id));
    if(!findId) return res.status(404).json({ message: "post not found" });
    res.status(201).json( findId );
});

router.get('/', function (_req, res) {
    res.status(200).json({ posts })
});

module.exports = router;
