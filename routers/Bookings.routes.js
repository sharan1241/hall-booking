const express = require("express")
const { getAllBookings, getABooking, createABooking } = require("../controllers/bookings.controller")

const BookingsRouter = express.Router()

BookingsRouter.get("/",getAllBookings)

BookingsRouter.get("/:bookingId",getABooking)

BookingsRouter.post("/create",createABooking)

module.exports = BookingsRouter