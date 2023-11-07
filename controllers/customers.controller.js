const CustomersModel = require("../models/customers.model")

async function getAllCustomers(req,res,next){
    try {
        const response = await CustomersModel.find()
    
        if(response && response.length>0){
            return res.status(200).json({
                success:true,
                message:"fetched all customers",
                data:response
            })
        }else{
            return res.status(200).json({
                success:true,
                message:"no customer found",
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
function getACustomer(req,res,next){
    const {customerId} = req.params
    if(customerId.length != 24){
        return res.status(400).json({
            success:false,
            error:"object id is invalid"
        })
    }
    CustomersModel.findById({_id:customerId}).then((response)=>{
        if(response && response._id){
            return res.status(200).json({
                message:"fetched a customer",
                data:response
            })
        }else{
            return res.status(200).json({
                message:"no customer found",
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
async function createACustomer(req,res,next){
    const Customer = new CustomersModel(req.body)
    Customer.save().then((response)=>{
        if(response && response._id){
            return res.status(200).json({
                success:true,
                message:"creating new customer successful",
                data:response
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"creating customer unsuccessful"
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
    createACustomer,
    getAllCustomers,
    getACustomer
}