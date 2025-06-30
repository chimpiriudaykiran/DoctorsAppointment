export default function handleCancelAppointment(req, res){
    res.status(200).json({mesage:"Appointment Cancelled", data: req.body})
}