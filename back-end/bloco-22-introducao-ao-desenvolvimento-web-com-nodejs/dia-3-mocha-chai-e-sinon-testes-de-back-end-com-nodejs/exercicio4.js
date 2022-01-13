const fs = require('fs');
function createWriteFile(file, content) {
    try {
        fs.writeFileSync(file, content, {flag : 'w'});
        const leitura = fs.readFileSync(file,'utf-8');
        return 'ok';
    }
    catch(err) {
        return null;
    }
}

//createWriteFile('arq4.txt', 'oi');

module.exports = createWriteFile;