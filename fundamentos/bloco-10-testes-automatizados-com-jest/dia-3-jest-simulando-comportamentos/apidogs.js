//const fetch = require("node-fetch");
const sec = document.querySelector('.fotos');
const texto = document.querySelector('.tex');

const fetchDog = async () => {
    const chamada = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await chamada.json();
    if (json.message != '') {
        texto.innerHTML = json.status;
        const img = document.createElement('img');
        img.src = json.message;
        sec.appendChild(img);
    }
    else {
        texto.innerHTML = 'erro';
    }
};


window.onload = () => { fetchDog() };


//console.log(fetchDog());
//fetchApi();