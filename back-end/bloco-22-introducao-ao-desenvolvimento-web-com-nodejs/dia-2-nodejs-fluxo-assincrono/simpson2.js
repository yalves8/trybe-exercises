const fs = require('fs').promises;

async function searchId(id) {
    const leArq = await fs
        .readFile('./simpson.json', 'utf-8')
        .then((content) => JSON.parse(content));

    const procura = leArq.find((simpson) => simpson.id === id);

    if (!procura) {
        throw new Error('id não encontrado');
    }

    return procura;

}

searchId('2').then((result) => console.log(result)).catch((err) => console.error(err.message));
