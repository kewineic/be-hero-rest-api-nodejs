const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    BeforeEach(async ()=> {
        await connection.migrate.latest()
    })

    it('shoud be able to create a new ONG', async() =>{
        const response = await request(app)
        .post('/ong')
        .send({
                name:"Heineken 3",
                email:"ficc@outlok.com",
                whatsapp:"21900000000",
                city:"Rio de Janeiro",
                uf:"RJ"
            })

            console.log(response.body)
        })
 })
