let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 200];
let caixa = numbers[0];

for(let i =0;i<numbers.length;i+=1){
    
    if(caixa < numbers[i]){
        caixa = numbers[i];
    }
    
}

console.log(caixa);
