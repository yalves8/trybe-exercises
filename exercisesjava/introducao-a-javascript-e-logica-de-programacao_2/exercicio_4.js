let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
for(let numero of numbers){
    soma += numero;
}
media = soma / numbers.length;

if(media <= 20){
    console.log("Valor menor ou igual a 20");
}
else{
    console.log("Valor maior que 20");
}