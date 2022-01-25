const CepModel = require('../model/CepModel');
const CepMiddlewares = require('../middlewares/CepMiddlewares');

const findCep = async (cep) => {
    const validation = CepMiddlewares.cepValidation(cep);
    if(validation.error) return validation;
    const cepFinder = await CepModel.findCep(cep);
    if (!cepFinder) {
        return {
            code: 404,
            message: 'CEP não encontrado',
        };
    }
    return cepFinder;
}

module.exports = { findCep }
