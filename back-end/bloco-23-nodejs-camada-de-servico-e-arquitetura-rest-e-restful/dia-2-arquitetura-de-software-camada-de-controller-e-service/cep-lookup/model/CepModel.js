const connection = require('./connection');

const findCep = async (cep) => {
    const query = `SELECT * FROM cep_lookup.ceps WHERE cep=?`;
    const [cepData] = await connection.execute(query, [cep]);
    if (!cepData) return null;
    return cepData[0];
}

module.exports = { findCep };