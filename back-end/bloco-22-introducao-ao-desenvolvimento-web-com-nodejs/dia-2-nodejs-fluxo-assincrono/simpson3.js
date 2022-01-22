const fs = require('fs').promises;



fs.readFile('./simpson.json', 'utf-8')
    .then((content) => {
        return JSON.parse(content);
    })
    .then((grupo) => {
        const teste = grupo.filter(({ id }) => id !== '10' && id !== '6');
        fs.writeFile('./simpson.json', JSON.stringify(teste));
        fs.readFile('./simpson.json', 'utf-8')
            .then((content) => {
                return JSON.parse(content);
            })
            .then((grupo) => grupo.map(({id, name}) =>  console.log(`${id} - ${name}`)) );
    });
