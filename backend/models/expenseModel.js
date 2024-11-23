const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    amount:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    date:{
        type:Date,
        required:true
    }
},
{
    timestamps:true
}
)

const expenseModel = mongoose.model("expenses",expenseSchema);
module.exports = expenseModel;