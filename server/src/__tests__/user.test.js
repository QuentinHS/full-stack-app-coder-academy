const request = require("supertest")
const app = require(".app")

describe("user tests", ()=>{
  test("User profile GET /:user_id", async ()=>{
    const res = await request(app).get("/:user_id")

    //test the status code is ok 
    expect(res.status).toBe(200)
    // test that the content type is json 
    expect(res.headers["content-type"]).toMatch(/json/i)
    // test the right page has been opened 

    // test it is the correct user 
    expect(res.body)
  })

  test("Creates a user POST /register", ()=>{
    const res = await request(app).post("/register").send(userPayload)
  })
})