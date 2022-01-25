

const cepValidation = (cep) => {
    const cepRegex = /\d{5}-?\d{3}/;
    if(!cepRegex.test(cep)) return {
        "error": 
        { "code": 400, "message": "CEP inválido" }
    };
    return true;
};
    

module.exports = { cepValidation}