const request = require("supertest")
const api = "https://swapi.dev/api/"

describe('Testar endpoint da StarWarsAPI', () => {
    test('deve retornar o CLIMATE de um PLANETA  sem problemas', async() => {
        const response = await request(api).get('/planets/1/');
        expect (response.body.climate).toBe("arid")
    })
})

describe('Testar endpoint da StarWarsAPI', () => {
    test('deve retornar o NAME de um PLANETA  sem problemas', async() => {
        const response = await request(api).get('/people/1/');
        expect (response.body.name).toBe("Luke Skywalker")
    })
})

describe('Testar endpoint da StarWarsAPI', () => {
    test('deve retornar o NAME de um FILME sem problemas', async() => {
        const response = await request(api).get('/films/2');
        expect (response.body.title).toEqual("The Empire Strikes Back")
    })
})

describe('Testar endpoint da StarWarsAPI', () => {
    test('deve retornar o se o ID é menor ou igual a 10', async() => {
        const response = await request(api).get('/films/1');
        expect (response.body.episode_id).toBeLessThanOrEqual(10)
    })
})
