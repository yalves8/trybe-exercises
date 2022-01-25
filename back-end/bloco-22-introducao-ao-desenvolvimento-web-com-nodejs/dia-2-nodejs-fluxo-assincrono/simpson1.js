const fs = require('fs').promises;

fs.readFile('./simpson.json', 'utf-8')
  .then((content) => {
    return JSON.parse(content);
  })
  .then((grupo) => grupo.map(({id, name}) =>  console.log(`${id} - ${name}`)) );