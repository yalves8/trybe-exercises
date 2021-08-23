const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const arrayAnimals = Animals.filter((animal) => animal.type === type);
            if (arrayAnimals.length !== 0) {
                return resolve(arrayAnimals);
            };

            return reject(new Error('Não possui esse tipo de animal.'));
        }, 100);
    })
);

const findAnimalByName = (name) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Animals.filter((animal) => animal.name === name);

            if (result.length > 0) {
                return resolve(result);
            }

            return reject(new Error('Nenhum animal com esse nome!'));
        }, 100);
    })
);

const getAnimal = (age) => (
    // Adicione o código aqui.
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const listAnimals = Animals.filter((animal) => animal.age === age);

            if (listAnimals.length > 0) {
                return resolve(listAnimals);
            }

            return reject(new Error('Nenhum animal encontrado!'));
        }, 100);

    })
);


describe('Verifica animal pelo tipo', () => {
    describe('Animal existe', () => {
        it('Retorna lista de animais que existe', () => {
            expect.assertions(1);
            const esperado = [
                { name: 'Preguiça', age: 5, type: 'Cat' },
            ];
            return expect(findAnimalsByType('Cat')).resolves.toEqual(esperado);
        });
    });

    describe('Animal não existe', () => {
        it('Retorna um erro', () => {
            expect.assertions(1);
            return expect(findAnimalsByType('Doido')).rejects.toEqual(new Error('Não possui esse tipo de animal.'));
        });
    });
}); 


describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
        it('Retorna lista de animais que existe', () => {
            expect.assertions(1);
            const esperado = [
                { name: 'Preguiça', age: 5, type: 'Cat' },
            ];
            return expect(findAnimalByName('Preguiça')).resolves.toEqual(esperado);
        });
    });

    describe('Quando não existe o animal com o nome procurado', () => {
        it('Retorna um erro', () => {
            expect.assertions(1);
            return expect(findAnimalByName('sdg')).rejects.toEqual(new Error('Nenhum animal com esse nome!'));
       
        });
    });
});

describe('Testando promise - getAnimal', () => {
    describe('Quando existe o animal com o a idade', () => {
        test('Verifique o primeiro nome do animal no array retornado', () => {
            const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
            return expect(getAnimal(5)).resolves.toEqual(animals);
        });
    });

    describe('Quando não existe o animal com o nome procurado', () => {
        test('Retorna um erro', () => {
            expect.assertions(1);
            return expect(getAnimal(3)).rejects
                .toEqual(new Error('Nenhum animal encontrado!'));
        });
    });
});