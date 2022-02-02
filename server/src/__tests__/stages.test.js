require("dotenv").config()
const request = require("supertest")
const connectDB = require("../db/connect");
const mongoose = require("mongoose")
const app = require("../app");
const projectPayload = require('./payloads/projectPayload')
const Project = require("../models/Project");


describe("stage tests", () =>{
    beforeAll(async () => {
        // await connection
        await connectDB(process.env.MONGO_URI_TEST)
      });
    
    afterAll((done) => {
        // close the connection
        mongoose.connection.close();
        done()
    })  
    test("retrieve all stages within a project ", async()=>{
        const project = await Project.create(projectPayload)
        const project_id = project._id
    
        const res = await request(app).get(`/projects/${project_id}/stages`)
        //test the status code is ok 
        expect(res.status).toBe(200)
        // test that the content type is json 
        expect(res.headers["content-type"]).toMatch(/json/i)
        // test that we're getting an object with stages 
        console.log(res.body)
        expect.objectContaining({
            stages: expect.anything()
        })
    })
    test("")
})