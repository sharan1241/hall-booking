const express = require("express")
const { getAllHalls, getAHall, createAHall } = require("../controllers/halls.controller")

const HallsRouter = express.Router()

HallsRouter.get("/",getAllHalls)

HallsRouter.get("/:hallId",getAHall)

HallsRouter.post("/create",createAHall)

module.exports = HallsRouter