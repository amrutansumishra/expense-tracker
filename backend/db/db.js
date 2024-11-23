const mongoose = require('mongoose')

const db = () =>{
        mongoose.connect(process.env.MONGO_URL).then(()=>{
            console.log("DB is connected")
        }).catch((err)=>{
        console.log("Error: ",err.message)
    })
        
    
}

module.exports = {db}
