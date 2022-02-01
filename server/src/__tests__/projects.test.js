const request = require("supertest")
const createServer = require("../utils/server")

const date = new Date()
const projectPayload ={
    name: "project 1",
    address: "123 wallaby way",
    completionDate: date
}

const app = createServer()

describe("project tests", ()=>{
    // test("retrive all projects Get /",async ()=>{

    //     const res = await request(app).get("/projects")
    //     //test the status code is ok 
    //     expect(res.status).toBe(200)
    //     // test that the content type is json 
    //     expect(res.headers["content-type"]).toMatch(/json/i)
    //     // test that the right page is open
    // })
    test("Creates new project", async () =>{

        const res = await request(app)
            .post("/projects")
            .send(projectPayload)
    
            expect(res.status).toBe(200)
            expect(res.headers["content-type"]).toMatch(/json/i)
            expect(res.body.id).toBeTruthy()
            console.log(body)
    })

})
