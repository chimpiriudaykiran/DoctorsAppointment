import express from "express"
import handleBookAppointment from "../controller/book_appointment.controller.js"

const bookRouter = express.Router()

bookRouter.post('/', handleBookAppointment )

export default bookRouter;