import mongoose from "mongoose";
// import connectDB from "../config/db.js";

const doctorsSchema = new mongoose.Schema({
  name: { type: String, require: true },
  specialization: { type: String, require: true },
  address: { type: String, require: true },
  starttime: {type: Number},
  endtime: {type: Number},
  eachslot:{type: Number},
  bookings:[{date: {type: Date}, time: {type: Number}}]
});

const doctorModel = mongoose.model("doctors", doctorsSchema);

export default doctorModel;


// connectDB()

// const data = doctorModel({name:"uday", specialization: "Dentist", address:"Dallas", starttime: 9, endtime: 17, each: 60})
// data.save()
