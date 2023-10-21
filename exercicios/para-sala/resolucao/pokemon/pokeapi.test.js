const request = require("supertest")
const api = "https://pokeapi.co/api/v2"

describe('Testar endpoint da PokeAPI', () => {
    test('deve retornar um personagem pokemon sem problemas', async() => {
        const response = await request(api).get('/pokemon/ditto');
        expect (response.body.id).toBe(132)
        expect(response.status).toBe(200)
    })
})


describe('Testar endpoint da PokeAPI', () => {
    test('deve retornar o HEIGHT do PIKACHU sem problemas', async() => {
        const response = await request(api).get('/pokemon/pikachu');
        expect (response.body.height).toBe(4)
        expect(response.status).toBe(200)
    })
})

describe('Testar endpoint da PokeAPI', () => {
    test('deve retornar o Name do PIKACHU sem problemas', async() => {
        const response = await request(api).get('/pokemon/25');
        expect (response.body.name).toBe("pikachu")
        expect(response.status).toBe(200)
    })
})

describe('Testar endpoint da PokeAPI', () => {
    test('deve retornar um personagem pokemon sem problemas', async() => {
        const response = await request(api).get('/pokemon/pikachu');
        expect (response.body.id).toBe(25)
        expect(response.status).toBe(200)
    })
})

describe('Testar endpoint da PokeAPI', () => {
    test('deve retornar o WEIGHT personagem pokemon sem problemas', async() => {
        const response = await request(api).get('/pokemon/pikachu');
        expect (response.body.weight).toBe(60)
        expect(response.status).toBe(200)
    })
})
describe('Testar endpoint da PokeAPI', () => {
    test('deve retornar o base_experience personagem pokemon sem problemas', async() => {
        const response = await request(api).get('/pokemon/25');
        expect (response.body.base_experience).toBe(112)
        expect(response.status).toBe(200)
    })
})


