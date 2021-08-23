const techList = (array, nome) => {
    if(array.length === 0) return `Vazio!`;
    const lista = [];
    array.sort().forEach((novo,index) => {
        lista[index] = new Object();
        lista[index].name = nome;
        lista[index].tech = novo;
    });
    return lista;
}


module.exports = techList;