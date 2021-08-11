const chama = (nomeC) => {
    const email = nomeC.toLowerCase().split(' ').join('_');
    const total = `Nome Completo: ${nomeC} email: ${email}`;
    return total;
};


const newEmployees = (chama) => {
    const employees = {
        id1: chama('Pedro Guerra'), // Nome:  -> Chame sua função passando o nome Pedro Guerra como parâmetrochama(), substituindo as aspas
        id2: chama('Luiza Drumond'), // Nome:  -> Chame sua função passando o nome Luiza Drumond como parâmetrochama(), substituindo as aspas
        id3: chama('Carla Paiva'), // Nome:  -> Chame sua função passando o nome Carla Paiva como parâmetrochama(), substituindo as aspas
    }
    return employees;
};

console.log(Object.values(newEmployees(chama)));