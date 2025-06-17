const routes = require('express').Router()
const {fetchExpenses,addExpense,updateExpense,deleteExpense} = require('../controllers/expenseController')
const verifyToken = require('../services/verifyToken')
routes.get('/expenses',verifyToken,fetchExpenses);
routes.post('/expenses',verifyToken,addExpense)
routes.patch('/expenses',verifyToken,updateExpense)
routes.delete('/expenses',verifyToken,deleteExpense)

module.exports = routes;