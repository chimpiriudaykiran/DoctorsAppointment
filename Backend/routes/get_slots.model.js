import express from "express"
import { handleGetAllSlots, handleGetSlotByDate } from "../controller/get_slots.controller.js"

const getRouter = express.Router()

getRouter.get('/', handleGetAllSlots)

getRouter.get('/:date', handleGetSlotByDate)

export default getRouter;