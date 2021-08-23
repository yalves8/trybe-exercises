const estudantes = [
    {
        nome: 'Jorge',
        sobrenome: 'Silva',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 67 },
            { name: 'Português', nota: 79 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 65 },
        ],
    },
    {
        nome: 'Mario',
        sobrenome: 'Ferreira',
        idade: 15,
        turno: 'Tarde',
        materias: [
            { name: 'Matemática', nota: '59' },
            { name: 'Português', nota: '80' },
            { name: 'Química', nota: '78' },
            { name: 'Biologia', nota: '92' },
        ],
    },
    {
        nome: 'Jorge',
        sobrenome: 'Santos',
        idade: 15,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: '76' },
            { name: 'Português', nota: '90' },
            { name: 'Química', nota: '70' },
            { name: 'Biologia', nota: '80' },
        ],
    },
    {
        nome: 'Maria',
        sobrenome: 'Silveira',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: '91' },
            { name: 'Português', nota: '85' },
            { name: 'Química', nota: '92' },
            { name: 'Biologia', nota: '90' },
        ],
    },
    {
        nome: 'Natalia',
        sobrenome: 'Castro',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: '70' },
            { name: 'Português', nota: '70' },
            { name: 'Química', nota: '60' },
            { name: 'Biologia', nota: '50' },
        ],
    },
    {
        nome: 'Wilson',
        sobrenome: 'Martins',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: '80' },
            { name: 'Português', nota: '82' },
            { name: 'Química', nota: '79' },
            { name: 'Biologia', nota: '75' },
        ],
    },
];

//O que foi feito? Primeiro usou-se o filter para filtrar todos os estudantes 
//que estudam no período da manhã. Como o retorno do filter é um array de elementos, 
//você pode usar o map logo em seguida para retornar os nomes completos de estudantes 
//presentes nesse novo array. O map nesse caso é usado apenas para retornar as 
//informações pedidas, o nome completo, enquanto o filter é usado para filtrar o array.

const filter = estudantes.filter((estudante) => (estudante.turno === 'Manhã')).map((print) =>
    `${print.nome} ${print.sobrenome}`);

console.log(filter);


const buscaNome = (name, student) => {
    const estudNome = student.find((elemento) => elemento.nome === name);
    return estudNome.materias.map((materia) => (`${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`));
};


console.log(buscaNome('Natalia', estudantes));