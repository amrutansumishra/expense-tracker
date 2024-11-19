import React, { useState } from "react";
// import background from "../../assets/images/login-background.jpg";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";
import Otp from "../../components/Otp/Otp";
import wave from "../../assets/icons/wave.svg";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Notification from "../../components/Notification/Notification";
import {userRegister, googleAuth,sentOtp} from '../../services/services';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css";

const SignUp = () => {
	const [passcode, setPasscode] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [notification, setNotification] = useState();
	const [loader,setLoader] = useState(false)

	const navigation = useNavigate()

	const handleSubmitEmail = (e) => {
		e.preventDefault();
		if (e.target.email.length < 4) {
			setNotification("Please Enter Valid Email");
			setTimeout(() => {
				setNotification("");
			}, 5000);
		} else {
			setEmail(e.target.email.value);
			setName(e.target.name.value);
			setPassword(e.target.password.value);
			userVerify(e.target.email.value)
		}
	};

	const handleSubmitPasscode = async(e) => {
		e.preventDefault();
		setLoader(true)
		const result = await userRegister({name,email,password,otp:e.target.otp.value});
		setLoader(false)
			if(result.data.success){
				sessionStorage.setItem("authToken",result.data.token)
				navigation('/dashboard')
			}else{
				setNotification("Invalid OTP");
				setTimeout(() => {
					setNotification("");
				}, 5000);
			}
		};


	const userVerify= async(email)=>{
		setLoader(true)
		const result = await sentOtp(email)
		if(result?.data?.success){
			setPasscode(true);
			setNotification("OTP send successfully, Please check your inbox.");
			setTimeout(() => {
				setNotification("");
			}, 5000);
		}else{
			setNotification("Something Went wrong try again");
			setTimeout(() => {
				setNotification("");
			}, 5000);
		}
		setLoader(false)
	}

	const socialLogin =async(res)=>{
		setLoader(true)
		const result = await googleAuth(res.credential)
		setLoader(false)
		if(result.data?.success){
			sessionStorage.setItem("authToken",result.data?.token)
			navigation('/dashboard')
		}else{
			setNotification("Invalid Credentials");
			setTimeout(() => {
				setNotification("");
			}, 5000);
		}
	  }

	return (
		<div className="login">
			{loader&&<Loader/>}
			{notification && <Notification message={notification} />}
			{/* <img src={background} alt="background" className="login-background" /> */}
			<div className="login-card">
				<div className="login-card-content">
					<div className="signup-card-body">
						<div className="login-card-header">
							<img src={wave} alt="wave" />
						</div>
						<div className="login-card-body-content">
							<h2>Happy to see you!</h2>
							{passcode ? (
								<>
									<form method="POST" onSubmit={(e) => handleSubmitPasscode(e)}>
									<div className="login-message">
										We have sent verification code to your email {email}{" "}
										<button className="button-small" onClick={() => setPasscode(false)}>change</button>
									</div>
									<div className="login-input">
										<input
											type="text"
											className="otp"
											placeholder="Verification Code"
											autoComplete="off"
											maxLength="6"
											id="otp"
											name="otp"
											required
										/>
									</div>

									<div className="login-button">
										<button>Submit</button>
									</div>
									<div className="login-message">
										Not recieved your code ?{" "}
										<Otp email={email} resendOTP={userVerify}/>
									</div>
									</form>
									
								</>
							) : (
								<>
									<GoogleSignIn socialLogin={socialLogin} text="signup_with" />
									<div className="divider-line">or</div>

									<form method="POST" onSubmit={(e) => handleSubmitEmail(e)}>
										<div className="login-input">
											<input
												type="text"
												placeholder="Enter Name"
												id="name"
												name="name"
												required
											/>
										</div>
										<div className="login-input">
											<input
												type="email"
												placeholder="Enter Email"
												id="email"
												name="email"
												required
											/>
										</div>
										<div className="login-input">
											<input
												type="password"
												placeholder="Enter password"
												id="password"
												name="password"
												required
											/>
										</div>
										<div className="login-checkbox">
											<input type="checkbox" name="keep-in" required />{" "}
											<Link>Accept Term & Conditon</Link>
										</div>
										<div className="login-button">
											<button type="submit" name="submit">
												Continue
											</button>
										</div>
									</form>
								</>
							)}

							{!passcode ? (
								<div className="sign-up-link">
									Already have an account?{" "}
									<Link to="/">
										<button className="button-small">Login</button>
									</Link>
								</div>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
