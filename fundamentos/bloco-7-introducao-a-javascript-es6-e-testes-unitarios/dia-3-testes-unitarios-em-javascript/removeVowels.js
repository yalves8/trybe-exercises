const removeVowels = (word) => {
    const array = [];
    const separa = word.split('');
    const vogais = /[aeiou]/i;
    let count = 0;
    for(let i = 0; i < separa.length; i +=1){
        if(vogais.test(separa[i]) === true){
            count +=1;
            array.push(count);
        }
        else{
            array.push(separa[i]);
        }
    }

    return array.join('');
};


console.log(removeVowels('Dayane'));


const parameter = 'Dayane';
const result = 'D1y2n3';

