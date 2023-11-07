const express = require("express")
const { getAllRooms, getARoom, createARoom } = require("../controllers/rooms.controller")

const RoomsRouter = express.Router()

RoomsRouter.get("/",getAllRooms)

RoomsRouter.get("/:roomId",getARoom)

RoomsRouter.post("/create",createARoom)

module.exports = RoomsRouter