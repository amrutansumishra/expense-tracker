const routes = require('express').Router()
const {mailController} = require('../controllers/emailController')
routes.get('/sendmail',mailController);

module.exports = routes;