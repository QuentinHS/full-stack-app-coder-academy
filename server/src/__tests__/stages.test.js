require("dotenv").config()
const request = require("supertest")
const connectDB = require("../db/connect");
const mongoose = require("mongoose")
const app = require("../app");
const stagePayload = require('./payloads/projectPayload')
const Project = require("../models/Project")

describe("stage tests", ()=>{
    beforeAll(async () => {
        // await connection
        await connectDB(process.env.MONGO_URI_TEST)
      });
    
    afterAll((done) => {
        // await connection.close();
        mongoose.connection.close();
        // await db.close();
        done();
    });  

    test("retrive all stage Get /projects/:id/stages", async () =>{
        const project_id = 1

        const res = await request(app).get(`/projects/${project_id}/stage`)
        //test the status code is ok 
        expect(res.status).toBe(200)
        // test that the content type is json 
        expect(res.headers["content-type"]).toMatch(/json/i)
        // test that we're getting an object with projects 
        console.log(res)
    })


})