import mongoose from "mongoose";

const user = process.env.MONGODB_USER || 'root';
const password = process.env.MONGODB_PASSWORD || '9010103733';
const database = process.env.MONGODB_DATABASE || 'doctorsapp';

export default function connectDB() {
  mongoose
    .connect(
      `mongodb://${user}:${password}@localhost:27017/${database}?authSource=admin`
    )
    .then(console.log("MongoDB connected"))
    .catch((error) => console.log(error));
}
