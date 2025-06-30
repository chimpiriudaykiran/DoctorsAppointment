import express from "express"
import handleCancelAppointment from "../controller/cancel_appointment.controller.js"

const cancelRouter = express.Router()

cancelRouter.delete('/', handleCancelAppointment)

export default cancelRouter;