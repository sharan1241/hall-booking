const express = require("express")
const HallsRouter = require("../routers/Halls.routes")
const BookingsRouter = require("../routers/Bookings.routes")
const CustomersRouter = require("../routers/Customers.routes")
const RoomsRouter = require("../routers/Rooms.routes")
const API_SERVER = express()

API_SERVER.use("/halls",HallsRouter)
API_SERVER.use("/bookings",BookingsRouter)
API_SERVER.use("/customers",CustomersRouter)
API_SERVER.use("/rooms",RoomsRouter)

module.exports = API_SERVER