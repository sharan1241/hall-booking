const { default: mongoose } = require("mongoose");

const RoomSchema = new mongoose.Schema({
    RoomName:{
        type:String,
        required:true
    },
    SeatingCapacity:{
        type:Number,
        required:true
    },
    Amenities:{
        type:Array,
        required:true
    },
    PricePerHour:{
        type:Number,
        required:true
    }
},{timestamps:true})

const RoomsModel = mongoose.model('room',RoomSchema)

module.exports = RoomsModel