const { default: mongoose } = require("mongoose");

const BookingSchema = new mongoose.Schema({
    RoomId:{
        type:String,
        required:true
    },
    BookingStart:{
        type:Date,
        required:true
    },
    BookingEnd:{
        type:Date,
        required:true
    },
    CustomerName:{
        type:String,
        required:true
    }
},{timestamps:true})

const BookingsModel = mongoose.model('booking',BookingSchema)

module.exports = BookingsModel