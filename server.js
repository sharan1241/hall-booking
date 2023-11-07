const express = require("express")
const API_SERVER = require("./services/service")
const BODY_PARSER = require("body-parser")
const  configDotenv  = require("dotenv")

configDotenv.config()

const {init} = require("./dbConfig")
init()
const HTTP_SERVER = express()

HTTP_SERVER.use(BODY_PARSER.urlencoded({ extended: true }))

// parse application/json
HTTP_SERVER.use(BODY_PARSER.json())

const PORT = 5000

const HOST = "localhost"

HTTP_SERVER.listen(PORT,process.env.NODE_HOSTNAME,()=>{
    console.log(`listening to request on the port ${PORT}`)
})
HTTP_SERVER.use("/api",API_SERVER)
