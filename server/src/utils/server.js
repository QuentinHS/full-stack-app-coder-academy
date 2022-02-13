const express = require("express")
// create express server
function createServer(){
    const app = express()
    app.use(express.json())

    return app
}
module.exports = createServer
