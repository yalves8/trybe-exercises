const connection = require('./connection');

const isValid = (first_name, last_name, emailUser, passwUser) => {

    if (!passwUser || typeof (passwUser) !== 'string') return 'O campo password deve existir';
    if (!first_name || typeof (first_name) !== 'string' || first_name.length < 6) return 'O campo firstName deve ter pelo menos 6 caracteres';
    if (!last_name || typeof (last_name) !== 'string') return 'O campo lastName deve existir';
    if (!emailUser || typeof (emailUser) !== 'string') return 'O campo email deve existir';
    return true;
}

const create = async (firstName, lastName, email, passw) => {
    const query = `INSERT INTO model_example.users (firstName, lastName, email, passw) 
    VALUES (?, ?, ?, ?)`;
    connection.execute(query,[firstName, lastName, email, passw]);
}

module.exports = {create, isValid};