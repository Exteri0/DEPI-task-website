import app from '../server.js';
import supertest from 'supertest'

const request = supertest(app)



describe("basic functionality",function(){
    it("tests the server is working", async function(){
        const response = await request.get('/test')
        console.log(response)
        expect(response.status).toBe(200)
    })
})