const RoomsModel = require("../models/rooms.model")

async function getAllRooms(req,res,next){
    try {
        const response = await RoomsModel.find()
    
        if(response && response.length>0){
            return res.status(200).json({
                success:true,
                message:"fetched all room",
                data:response
            })
        }else{
            return res.status(200).json({
                success:true,
                message:"no room found",
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
function getARoom(req,res,next){
    const {roomId} = req.params
    if(roomId.length != 24){
        return res.status(400).json({
            success:false,
            error:"object id is invalid"
        })
    }
    RoomsModel.findById({_id:roomId}).then((response)=>{
        if(response && response._id){
            return res.status(200).json({
                message:"fetched a room",
                data:response
            })
        }else{
            return res.status(200).json({
                message:"no room found",
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
async function createARoom(req,res,next){
    const room = new RoomsModel(req.body)
    room.save().then((response)=>{
        if(response && response._id){
            return res.status(200).json({
                success:true,
                message:"creating new room successful",
                data:response
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"creating room unsuccessful"
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
    createARoom,
    getAllRooms,
    getARoom
}