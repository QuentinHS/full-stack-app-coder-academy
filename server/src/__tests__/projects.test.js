require("dotenv").config()
const request = require("supertest")
const connectDB = require("../db/connect");
const mongoose = require("mongoose")
const app = require("../app");
const projectPayload = require('./payloads/projectPayload')
const Project = require("../models/Project")

describe("project tests", ()=>{
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
    test("retrive all projects Get /", async () =>{

        const res = await request(app).get('/projects')
        //test the status code is ok 
        expect(res.status).toBe(200)
        // test that the content type is json 
        expect(res.headers["content-type"]).toMatch(/json/i)
        // test that we're getting an object with projects 
        expect.objectContaining({
            projects: expect.anything()
        })
        console.log(res.body)
    
    })
    test("Creates new project", async () =>{

        const res = await request(app)
            .post("/projects")
            .send(projectPayload)
            //testing the response 
            // test status 
            expect(res.status).toBe(201)
            // test that json is being received 
            expect(res.headers["content-type"]).toMatch(/json/i)
            // test that the project exists 
            expect(res.body.project._id).toBeTruthy()
            // test that the correct project was made 
            expect(res.body.project.name).toEqual("project 1")

            // testing the database 
            const newProject = await Project.findOne({_id: res.body.project._id})
            expect(newProject).toBeTruthy
            expect(newProject.name).toBe(projectPayload.name)
            expect(newProject.address).toBe(projectPayload.address)
        

    })

    test("gets a specific project", async () =>{
        const project = await Project.create(projectPayload)
        const project_id = project._id
        const res = await request(app).get(`/projects/${project_id}`)
        //test the status code is ok 
        expect(res.status).toBe(200)
        // test that the content type is json 
        expect(res.headers["content-type"]).toMatch(/json/i)
        // check the right project is returned 
        expect(res.body.project._id).toEqual(project_id.toString())
    })

    test("updates a project", async ()=> {
        //creating the project
        const project = await Project.create(projectPayload)
        const project_id = project._id
        
        // data to update the created project 
        const data = {
            name: "updated project",
            address: "a new address "
        }

        const res = await request(app)
            .patch(`/projects/${project_id}`)
            .send(data)
            //testing th response 
            //test the status code is ok 
            expect(res.status).toBe(200)
            // test that the content type is json 
            expect(res.headers["content-type"]).toMatch(/json/i)
            // test the project is the corret project 
            expect(res.body.project._id).toEqual(project_id.toString())
            // test the name is updated
            expect(res.body.project.name).toBe(data.name)
            // test the address is updated 
            expect(res.body.project.address).toBe(data.address)
            
            // testing the database 
            const newProject = await Project.findOne({_id: res.body.project._id})
            expect(newProject).toBeTruthy
            expect(newProject.name).toBe(data.name)
            expect(newProject.address).toBe(data.address)
    })

    test.only("deletes a project", async ()=>{ 
        //creating the project
        const project = await Project.create(projectPayload)
        const project_id = project._id

        const res = await request(app)
            .delete("/projects/"+ project_id)
            expect(res.status).toBe(200)
            expect(await Project.findOne({_id: res.body.project._id})).toBeFalsy()
    })



})
