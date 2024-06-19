import React, { useState } from "react";
import "./Login.css";
import background from "../../assets/images/login-background.jpg";
import wave from "../../assets/icons/wave.svg";
import Notification from "../../components/Notification/Notification";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";
import Otp from "../../components/Otp/Otp";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

const Login = () => {
	const [passcode, setPasscode] = useState(false);
	const [reSend, setReSend] = useState(false);
	const [email, setEmail] = useState("");
	const [notification, setNotification] = useState();
	const [loader,setLoader] = useState(false)

	const handleSubmitEmail = (e) => {
		e.preventDefault();
		if (e.target.email.length < 4) {
			setNotification("Please Enter Valid Email");
			setTimeout(() => {
				setNotification("");
			}, 5000);
		} else {
			console.log(e.target.email.value);
			setEmail(e.target.email.value);
			setPasscode(true);
			setReSend((prevValue) => !prevValue);
		}
	};

	return (
		<div className="login">
			{loader&&<Loader/>}
			{notification && <Notification message={notification} />}
			<img src={background} alt="background" className="login-background" />
			<div className="login-card">
				<div className="login-card-content">
					<div className="login-card-body">
						<div className="login-card-header">
							<img src={wave} alt="wave" />
						</div>
						<div className="login-card-body-content">
							<h2>Welcome Back!</h2>
							{passcode ? (
								<>
									<div className="login-message">
										We have sent verification code to your email {email}{" "}
										<button
											className="button-small"
											onClick={() => setPasscode(false)}
										>
											change
										</button>
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
										<Otp active={reSend} email={email} />
									</div>
								</>
							) : (
								<>
									<GoogleSignIn />
									<div className="divider-line">or</div>

									<form onSubmit={(e) => handleSubmitEmail(e)}>
										<div className="login-input">
											<input
												type="email"
												placeholder="Enter Email"
												id="email"
												name="email"
												required
											/>
										</div>
										<div className="login-checkbox">
											<input type="checkbox" name="keep-in" /> Keep me log in
											until i log out
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
									Don't have an account?{" "}
									<Link to="/signup">
										<button className="button-small">create one</button>{" "}
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

export default Login;