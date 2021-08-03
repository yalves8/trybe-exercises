const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/


function addClass(evento) {
    const classe = document.querySelector('.tech');
    classe.classList.remove('tech');
    evento.target.classList.add('tech');
    input.value = '';
}
firstDiv.addEventListener('click', addClass);
secondDiv.addEventListener('click', addClass);
thirdDiv.addEventListener('click', addClass);



input.addEventListener('input', function (event) {
    const techElement = document.querySelector('.tech');
    techElement.innerText = event.target.value;
});


myWebpage.addEventListener('dblclick',function(){
    window.location.replace('https://www.youtube.com/');
});

myWebpage.addEventListener('mouseover',function(event){
    event.target.style.color = 'red';
});

myWebpage.addEventListener('mouseleave',function(event){
    event.target.style.color = 'white';
});





function resetText(event) {
    // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.