const routes = require('express').Router();
const {loginUser, registerUser,sendOtp,verifyOtp,googleLogin} = require('../controllers/authController')


routes.post('/login',loginUser);
routes.post('/signup',registerUser);
routes.post('/google-login',googleLogin);
routes.post('/verify-otp',verifyOtp);
routes.post('/send-otp',sendOtp);

module.exports = routes;