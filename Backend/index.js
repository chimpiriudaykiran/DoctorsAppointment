import express from "express"
import getRouter from "./routes/get_slots.model.js"
import bookRouter from "./routes/book_appointment.model.js"
import cancelRouter from "./routes/cancel_appointment.model.js"
import connectDB from "./config/db.js"
import 'dotenv/config'

// Initialize
const port = process.env.PORT || 9000
const app = express()
app.use(express.json())

// Connect MongoDB
connectDB()

// Routing
app.use("/get_slots", getRouter)
app.use("/book_appointment", bookRouter)
app.use("/cancel_appointment", cancelRouter)

// Start Server
app.listen(port,()=>console.log("Server Started at Port:", port))