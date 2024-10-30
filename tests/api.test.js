const axios = require('axios');

// Teste 1
test('Deve retornar dados do planeta Tatooine', async () => {
  const response = await axios.get('https://swapi.dev/api/planets/1/');
  expect(response.data.name).toBe('Tatooine');
});

// Teste 2
test('Deve retornar dados do planeta Alderaan', async () => {
  const response = await axios.get('https://swapi.dev/api/planets/2/');
  expect(response.data.name).toBe('Alderaan');
});

// // Teste 3
test('Deve retornar dados da nave Millennium Falcon', async () => {
  const response = await axios.get('https://swapi.dev/api/starships/10/');
  expect(response.data.name).toBe('Millennium Falcon');
});

// // Teste 4
test('Deve retornar dados da nave X-wing', async () => {
  const response = await axios.get('https://swapi.dev/api/starships/12/');
  expect(response.data.name).toBe('X-wing');
});

// // Teste 5
test('Deve retornar dados do filme A New Hope', async () => {
  const response = await axios.get('https://swapi.dev/api/films/1/');
  expect(response.data.title).toBe('A New Hope');
});

// // Teste 6
test('Deve retornar dados do filme The Empire Strikes Back', async () => {
  const response = await axios.get('https://swapi.dev/api/films/2/');
  expect(response.data.title).toBe('The Empire Strikes Back');
});

// // Teste 7
test('Deve retornar erro 404 para rota inexistente', async () => {
  try {
    await axios.get('https://swapi.dev/api/heroes/');
  } catch (error) {
    expect(error.response.status).toBe(404);
  }
});

// // Teste 8
test('Deve retornar dados do personagem Luke Skywalker', async () => {
  const response = await axios.get('https://swapi.dev/api/people/1/');
  expect(response.data.name).toBe('Luke Skywalker');
});

// // Teste 9
test('Deve retornar dados do personagem Darth Vader', async () => {
  const response = await axios.get('https://swapi.dev/api/people/4/');
  expect(response.data.name).toBe('Darth Vader');
});

// // Teste 10
// test('Deve retornar dados da espécie Wookie', async () => {
//   const response = await axios.get('https://swapi.dev/api/species/3/');
//   expect(response.data.name).toBe('Wookie');
// });