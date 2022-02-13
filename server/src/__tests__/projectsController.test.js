const  getAllProjects = require("../controllers/projectController")
const createProject = require("../controllers/projectController")
const Project = require( "../models/Project");
const projectPayload = require( "./payloads/projectPayload")
const {mockRequest, mockResponse} = require('./interceptor')



describe('projects controller', ()=>{


    test("retrive all projects Get /", async () =>{
       let req = mockRequest()
       req.params.id = 1

       const res = mockResponse() 

       await getAllProjects(req, res)

       expect(res.send).toHaveBeenCalledTimes(1)
       expect(res.send.mock.calls.length).toBe(1)
    
    })
})