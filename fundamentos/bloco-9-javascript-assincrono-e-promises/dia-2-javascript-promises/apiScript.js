// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    // Adicionar lógica aqui!
    const meuObj = {
        method : 'GET',
        headers: { 'Accept': 'application/json' },
    };

    fetch(API_URL, meuObj)
        .then((resposta) => console.log(resposta));
};

window.onload = () => fetchJoke();