import React, { useState } from "react";
import background from "../../assets/images/login-background.jpg";
import GoogleSignUp from "../../components/GoogleSignUp/GoogleSignUp";
import wave from "../../assets/icons/wave.svg";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
	const [passcode, setPasscode] = useState(false);
	const [email, setEmail] = useState("");
	const handleSubmitEmail = (e) => {
		e.preventDefault();
		if (e.target.email.length < 4) {
		} else {
			console.log(e.target.email.value);
			setEmail(e.target.email.value);
			setPasscode(true);
		}
	};

	return (
		<div className="login">
			<img src={background} alt="background" className="login-background" />
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
									<div className="login-message">Not recieved your code ?</div>
								</>
							) : (
								<>
									<GoogleSignUp />
									<div className="divider-line">or</div>

									<form onSubmit={(e) => handleSubmitEmail(e)}>
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
