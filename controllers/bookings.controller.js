const BookingsModel = require("../models/bookings.model")

async function getAllBookings(req,res,next){
    try {
        const response = await BookingsModel.find()
    
        if(response && response.length>0){
            return res.status(200).json({
                success:true,
                message:"fetched all bookings",
                data:response
            })
        }else{
            return res.status(200).json({
                success:true,
                message:"no booking found",
                data:[]
            })
        }
    } catch (error) {
        return res.status(400).json({
            success:false,
            error: error.message,
            message:"something went wrong"
        })
    }
}
function getABooking(req,res,next){
    const {bookingId} = req.params
    if(bookingId.length != 24){
        return res.status(400).json({
            success:false,
            error:"object id is invalid"
        })
    }
    BookingsModel.findById({_id:bookingId}).then((response)=>{
        if(response && response._id){
            return res.status(200).json({
                message:"fetched a booking",
                data:response
            })
        }else{
            return res.status(200).json({
                message:"no booking found",
                data:response
            })
        }
    }).catch((error)=>{
        return res.status(400).json({
            success:false,
            error: error.message,
            message:"something went wrong"
        })
    })
}
async function createABooking(req,res,next){
    const booking = new BookingsModel(req.body)
    const data = req.body
    const matchedCustomer = await BookingsModel.findOne({BookingStart:data.BookingStart})
    if(matchedCustomer){
        return res.status(400).json({
            success:false,
            message:"booking already exist"
        })
    }
    booking.save().then((response)=>{
        if(response && response._id){
            return res.status(200).json({
                success:true,
                message:"creating new booking successful",
                data:response
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"creating booking unsuccessful"
            })
        }
    }).catch((error)=>{
        return res.status(400).json({
            success:false,
            error: error.message,
            message:"something went wrong"
        })
    })
}

module.exports = {
    createABooking,
    getAllBookings,
    getABooking
}