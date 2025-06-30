import doctorModel from "../model/doctor.model.js";
import bookingsModel from "../model/bookings.model.js";
import mongoose from "mongoose";

export function handleGetAllSlots(req, res) {
    bookedDetails = doctorModel.find()
    // start =9
    // end = 17
    // numofslot = ( end - start ) / eachslot / 60
    // slots = range(numofslot) => [1,2,... 8]
    // availableslot = [2,3.., 8]
    // TimeRanges = {(9+2, 9+2+1), ()

    res.status(200).json({mesage:"Get All time Slots"})
}

export function handleGetSlotByDate(req, res){
     res.status(200).json({mesage:`Get All time Slots on : ${req.params.date}`})
}
