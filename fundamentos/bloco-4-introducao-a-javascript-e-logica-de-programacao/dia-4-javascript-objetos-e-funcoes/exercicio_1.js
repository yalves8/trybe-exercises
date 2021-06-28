let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  console.log('Bem-vinda, ' + info.personagem);
  console.log('\n');

  for(let i in info){
      console.log(i);
  }
console.log('\n');

  for(let i in info){
    console.log(info[i]);
}