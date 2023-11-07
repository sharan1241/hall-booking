const express = require("express")
const { getAllCustomers, getACustomer, createACustomer } = require("../controllers/customers.controller")

const CustomersRouter = express.Router()

CustomersRouter.get("/",getAllCustomers)

CustomersRouter.get("/:customerId",getACustomer)

CustomersRouter.post("/create",createACustomer)

module.exports = CustomersRouter