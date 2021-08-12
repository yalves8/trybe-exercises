const aleatorio = () => Math.round((Math.random() * 50)*100)/100;

const pro = new Promise((resolve,reject) => {
    const obj = [];
    while(obj.length != 10) obj.push(Math.round(Math.pow(aleatorio(),2)*100)/100);
    
    const soma = obj.reduce((acc,curr) => acc += curr, 0);
    if(soma <= 8000) resolve(soma)
    return reject(soma);

})
    .then((soma) => console.log(`Promisse resolvida, soma = ${soma}`) )
    .catch((soma) => console.log(`Promisse rejeitada, soma = ${soma}`));
