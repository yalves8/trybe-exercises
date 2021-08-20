const fetch = require('node-fetch');

const getRepos = (url) => {
    return fetch(url)
    .then(response => response.json())
    .then((data) => {
        return data.map((repo) => repo.name );
    });

};

describe('Verifica se existe o nome do repositorio', () => {
    it('Retorna verdadeiro se existe', () => {
        const url = 'https://api.github.com/orgs/tryber/repos';
        return getRepos(url).then(resultado => {
            expect(resultado).toContain("sd-01-week4-5-project-todo-list");
        });
    });
});