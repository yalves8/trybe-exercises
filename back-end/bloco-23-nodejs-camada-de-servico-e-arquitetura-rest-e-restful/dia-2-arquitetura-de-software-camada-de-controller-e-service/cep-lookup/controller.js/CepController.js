const CepService = require('../services/CepService');

const messagePing = (_req, res) => res.status(200).json({ message: "pong!" });

const findByCep = async (req,res) => {
    const {cep} = req.params;
    const findCep = await CepService.findCep(cep);
    if(!findCep) return res.status(cep.code).json(cep.message);
    return res.status(200).json(findCep);

}

module.exports = { messagePing, findByCep }