import doctorModel from "../model/doctor.model.js";
import bookingsModel from "../model/bookings.model.js";
import mongoose from "mongoose";

export default async function handleBookAppointment(req, res) {
  const data = { bookingid: new mongoose.Types.ObjectId(), ...req.body };
  console.log(data);
  const newData = new bookingsModel(data);
    // alreaadyBooked = doctorModel.find({date:newData.date, time:"2"})
    // res.status(403).json({message:"Booking is not avaible"})
    newData
      .save()
      .then((result) => {
        console.log(result);
        res
          .status(200)
          .json({ message: "Booking Appointment Successful", result: result });
      })
      .catch((error) => {
        res
          .status(403)
          .json({ message: "Booking Appointment Failed", error: error.message });
      });
}
