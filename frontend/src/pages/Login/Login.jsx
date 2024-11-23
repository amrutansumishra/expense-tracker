import React, { useState } from "react";
import "./Login.css";
// import background from "../../assets/images/login-background.jpg";
import wave from "../../assets/icons/wave.svg";
import Notification from "../../components/Notification/Notification";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import {userAuth, googleAuth} from '../../services/services';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [notification, setNotification] = useState();
	const [loader,setLoader] = useState(false)
	const navigation = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
		setNotification("Please Enter Valid Email");
			setTimeout(() => {
				setNotification("");
			}, 5000);
		if (e.target.email.value.length < 4) {
			setNotification("Please Enter Valid Email");
			setTimeout(() => {
				setNotification("");
			}, 5000);
		} else {
			console.log(e.target.email.value);
			setEmail(e.target.email.value);
			setPassword(e.target.password.value);
			userLogin(e.target.email.value,e.target.password.value)
		}
	};

	const userLogin = async()=>{
		setLoader(true)
		const result = await userAuth({email,password})
		setLoader(false)
		if(result?.data?.success){
			sessionStorage.setItem("authToken",result.data.token)
			navigation('/dashboard')
		}else{
			setNotification("Invalid Credentials");
			setTimeout(() => {
				setNotification("");
			}, 5000);
		}
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
					<div className="login-card-body">
						<div className="login-card-header">
							<img src={wave} alt="wave" />
						</div>
						<div className="login-card-body-content">
							<h2>Welcome Back!</h2>
									<GoogleSignIn socialLogin={socialLogin} text="signin_with" />
									<div className="divider-line">or</div>

									<form onSubmit={(e) => handleSubmit(e)}>
										<div className="login-input">
											<input
												type="text"
												placeholder="Enter Email"
												id="email"
												name="email"
												required
												onChange={(e)=>setEmail(e.target.value)}
												value={email}
											/>
										</div>
										<div className="login-input">
											<input
												type="password"
												placeholder="Enter password"
												id="password"
												name="password"
												required
												onChange={(e)=>setPassword(e.target.value)}
												value={password}
											/>
										</div>
										<div className="login-checkbox">
											<input type="checkbox" name="keep-in" /> Remember me
										</div>
										<div className="login-button">
											<button type="submit" name="submit">
												Continue
											</button>
										</div>
									</form>

							
								<div className="sign-up-link">
									Don't have an account?{" "}
									<Link to="/signup">
										<button className="button-small">create one</button>{" "}
									</Link>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;