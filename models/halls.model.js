const { default: mongoose } = require("mongoose");

const HallSchema = new mongoose.Schema({
    HallName:{
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

const HallsModel = mongoose.model('hall',HallSchema)

module.exports = HallsModel