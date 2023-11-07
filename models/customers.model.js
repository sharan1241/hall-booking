const { default: mongoose } = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    CustomerName:{
        type:String,
        required:true
    },
    CustomerCity:{
        type:String,
        required:true
    },
    CustomerPhoneNumber:{
        type:Number,
        required:true
    },
    CustomerEmailId:{
        type:String,
        required:true
    }
},{timestamps:true})

const CustomersModel = mongoose.model('customer',CustomerSchema)

module.exports = CustomersModel