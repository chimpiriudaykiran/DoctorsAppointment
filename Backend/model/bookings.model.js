import mongoose from "mongoose";

const bookingsSchema = new mongoose.Schema(
  {
    bookingid: { type: Object, require: true, unique: true },
    username: { type: String, require: true },
    firstname: { type: String, require: true },
    lastname: { type: String },
    emailid: { type: String, require: true },
    dob: { type: Date, require: true },
    sex: { type: String },
    date: { type: Date },
    time: { type: Number },
    doctorid: { type: String },
    status: { type: String },
  },
  { timestamps: true }
);

const bookingsModel = await mongoose.model("bookings", bookingsSchema);

export default bookingsModel;
