const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {db} = require('./db/db')
const app = express()
require('dotenv').config()
const authRoute = require('./routes/authRoute')
const expenseRoute = require('./routes/expenseRoute')
const emailSend = require('./routes/emailSend')
const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

app.use('/api/',authRoute);

app.use('/api/',expenseRoute);

app.use('/api/',emailSend);

const server =() =>{
    db()
    app.listen(PORT,()=>{
        console.log('Listening to port', PORT)
    })
}

server()