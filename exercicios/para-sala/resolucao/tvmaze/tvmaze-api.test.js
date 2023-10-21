const request = require("supertest")
const api = "https://api.tvmaze.com"

describe('Testar endpoint da TV MAZE API', () => {
    test('deve retornar o nome de uma ator sem problemas', async() => {
        const response = await request(api).get('/people/1');
        expect (response.body.id).toBe(1)
    })
})