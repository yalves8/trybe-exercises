
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 200];

/*for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }*/

  for (let index = 1; index<numbers.length; index +=1){
      for (let index2 = 0; index2<index;index2 +=1){
          if(numbers[index] < numbers[index2]){
              let position = numbers[index];
              numbers[index] = numbers[index2];
              numbers[index2] = position;
              
          }

      }
      
  }

  console.log(numbers);
  