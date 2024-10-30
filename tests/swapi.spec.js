const request = require('supertest');

test('Deve visualizar informações de um planeta específico', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/1/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Tatooine');
    expect(resposta.body.population).toBe('200000');
});

test('Deve listar todos os planetas', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.results.length).toBeGreaterThan(0);
    expect(resposta.body.results[0].name).toBeDefined();
});

test('Deve visualizar informações de uma nave específica', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/9/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Death Star');
    expect(resposta.body.model).toBe('DS-1 Orbital Battle Station');
});

test('Deve listar todas as naves', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.results.length).toBeGreaterThan(0);
    expect(resposta.body.results[0].name).toBeDefined();
});

test('Deve visualizar informações de um filme específico', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/1/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.title).toBe('A New Hope');
    expect(resposta.body.director).toBe('George Lucas');
});

test('Deve listar todos os filmes', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.results.length).toBeGreaterThan(0);
    expect(resposta.body.results[0].title).toBeDefined();
});

test('Deve retornar erro ao acessar uma rota inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/heroes/');
    expect(resposta.status).toBe(404);
});

test('Deve retornar erro ao buscar uma pessoa inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/9999/');
    expect(resposta.status).toBe(404);
});

test('Deve retornar erro ao buscar um planeta inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/9999/');
    expect(resposta.status).toBe(404);
});

// test('Deve retornar erro ao buscar uma nave inexistente', async () => {
//     const resposta = await request('https://swapi.dev/api').get('/starships/9999/');
//     expect(resposta.status).toBe(404);
// });