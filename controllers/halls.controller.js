const HallsModel = require("../models/halls.model")

async function getAllHalls(req,res,next){
    try {
        const response = await HallsModel.find()
    
        if(response && response.length>0){
            return res.status(200).json({
                success:true,
                message:"fetched all hall",
                data:response
            })
        }else{
            return res.status(200).json({
                success:true,
                message:"no hall found",
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
function getAHall(req,res,next){
    const {hallId} = req.params
    if(hallId.length != 24){
        return res.status(400).json({
            success:false,
            error:"object id is invalid"
        })
    }
    HallsModel.findById({_id:hallId}).then((response)=>{
        if(response && response._id){
            return res.status(200).json({
                message:"fetched a hall",
                data:response
            })
        }else{
            return res.status(200).json({
                message:"no hall found",
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
async function createAHall(req,res,next){
    const hall = new HallsModel(req.body)
    hall.save().then((response)=>{
        if(response && response._id){
            return res.status(200).json({
                success:true,
                message:"creating new hall successful",
                data:response
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"creating hall unsuccessful"
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
    createAHall,
    getAllHalls,
    getAHall
}