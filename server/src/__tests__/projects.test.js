const request = require("supertest")
const app = require(".app")

describe("project tests", ()=>{
    test("retrive all projects Get /",async ()=>{

        const res = await request(app).get("/")
        //test the status code is ok 
        expect(res.status).toBe(200)
        // test that the content type is json 
        expect(res.headers["content-type"]).toMatch(/json/i)
        // test that the right page is open
    })
    test("Creates new project", async () =>{

        const res = await request(app)
            .post("/createProject")
            .send(projectPayload)
    
            expect(res.status).toBe(200)
            expect(res.headers["content-type"]).toMatch(/json/i)
            expect(res.body.id).toBeTruthy()
    })

})
