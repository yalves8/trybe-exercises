// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Laranja', 'Kiwi', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Leite', 'Banana'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  
  return [...fruit, ...additional];
};



console.log(fruitSalad(specialFruit,additionalItens));