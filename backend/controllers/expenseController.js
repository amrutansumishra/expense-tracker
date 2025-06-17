const expenseModel = require('../models/expenseModel')


exports.fetchExpenses = async (req,res)=>{
    try{
        let query ={userId:req.user.data._id}
        let startLimit=0;
        let endLimit=0;
        let isLastPage = false;
        if(req.query.startdate && req.query.enddate){
            console.log(req.query.startdate, req.query.enddate)
            query.date = {$gte:new Date(req.query.startdate),$lte:new Date(req.query.enddate)}
        }
        if(req.query.startLimit && req.query.endLimit   ){
            startLimit= req.query.startLimit
            endLimit = parseInt(req.query.endLimit)+1
        }
       
        var result = await expenseModel.find(query).sort({ date: -1 }).skip(startLimit).limit(endLimit);
        
        if(result.length<endLimit){
            isLastPage=true;
        }else{
            result.pop()
        }
        
        res.status(200).json({
            success:true,
            isLastPage,
            result
        })
    }catch(err){
        res.status(400).json({
            success:false,
            err
        })
    }
}

exports.fetchAllExpenses = async (req,res)=>{
    try{
        const result = await expenseModel.find({userId:req.user.data._id});
        res.status(200).json({
            success:true,
            result
        })
    }catch(err){
        res.status(400).json({
            success:false,
            err
        })
    }
}

exports.addExpense = async (req,res)=>{
    try{
        const expense = new expenseModel({...req.body,userId:req.user.data._id});
        console.log("user",req.user)
        const data = await expense.save()
        res.status(201).json({
            success:true,
            data
        })
    }catch(err){
        res.status(400).json({
            success:false,
            err
        })
    }
}

exports.updateExpense = async (req,res)=>{
    try{
        console.log(req.params.id)
        const result = await expenseModel.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators : true
          })
        res.status(200).json({
            success:true,
            result
        })
    }catch(err){
        res.status(400).json({
            success:false,
            err
        })
    }
}

exports.deleteExpense = async (req,res)=>{
    try{
        const result = await expenseModel.deleteOne({ 
            _id: req.query.id,
            userId: req.user.data._id,
        })

        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'Expense not found or not authorized',
            });
        }
        res.status(200).json({
            success:true,   
            message: 'Expense deleted successfully',
        })
    }catch(err){
        res.status(400).json({
            success:false,
            err
        })
    }
}