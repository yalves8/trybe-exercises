let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 200];
let contador = 0;
for(numero of numbers){
    if(numero % 2 != 0){
        contador +=1;
    }
}

if(contador == 0){
    console.log("Não há números ímpares");
    return;
}

console.log(contador);