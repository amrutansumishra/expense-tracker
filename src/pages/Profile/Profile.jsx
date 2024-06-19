import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import "./Profile.css";
import profile from "../../assets/images/profile.jpg";

import Edit from "../../assets/icons/edit-alt.svg";
import Camera from "../../assets/icons/camera-plus.svg";
import { isEditable } from "@testing-library/user-event/dist/utils";

const Profile = () => {
	const [emailEdit, setEmailEdit] = useState(false);
	const [nameEdit, setNameEdit] = useState(false);
	const [passwordEdit, setPasswordEdit] = useState(false);
	const [phoneEdit, setPhoneEdit] = useState(false);
	const [image, setImage] = useState(profile);
	const [form, setForm] = useState({
		email: {
			value: '',
			isEditable: false,
		},
		phone: {
			value: '',
			isEditable: false,
		},
		password: {
			value: '',
			isEditable: false,
		},
	});
	
	const handleDisableToggle = (field) => setForm({...form, [field]: {...form[field], isEditable: !form[field].isEditable} })
	
	
	const onSubmit = (e) => {
		e.preventDefault();
	};
	const handleFileInputChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setImage(e.target.result);
			};
			reader.readAsDataURL(file);
		}
	};
	return (
		<div className="container">
		<SideBar active={3} />
		<div className="profile">
		<div className="profile-card">
		<div className="profile-card-body">
		<div className="profile-header">
		<div className="profile-image">
		<img src={image} alt="profile-img" />
		</div>
		<label htmlFor="profile-img-input" className="profile-img-edit">
		<img src={Camera} alt="edit" />
		<input
		id="profile-img-input"
		onChange={handleFileInputChange}
		type="file"
		accept="image/*"
		/>
		</label>
		</div>
		</div>
		
		<div className="profile-details">
		<div className="profile-title">
		<h2>
		Rupali Mishra
		<button onClick={() => setNameEdit(!nameEdit)}>
		<img src={Edit} alt="edit" />
		</button>
		</h2>
		{nameEdit && (
			<input
			type="text"
			name="name"
			placeholder="Enter new name"
			value={"Rupali Mishra"}
			id=""
			/>
		)}
		</div>
		<div className="profile-form">
		<div className="profile-form-group">
		<label className="profile-label">
		Email{" "}
		<button onClick={() => handleDisableToggle('email')}>
		{/* <button onClick={() => setEmailEdit(!emailEdit)}> */}
		<img src={Edit} alt="edit" />
		</button>
		</label>
		<input
		type="text"
		name="email"
		id=""
		placeholder="Enter email"
		value={"rupalimishra@gmail.ocm"}
		disabled={form.email.isEditable}
		/>
		</div>
		<div className="profile-form-group">
		<label className="profile-label">
		Phone{" "}
		<button onClick={() => setPhoneEdit(!phoneEdit)}>
		<img src={Edit} alt="edit" />
		</button>
		</label>
		<input
		type="text"
		name="phone"
		placeholder="Enter phone number"
		value={"9393939393"}
		id=""
		disabled={!phoneEdit}
		/>
		</div>
		<div className="profile-form-group">
		<label className="profile-label">
		Password{" "}
		<button onClick={() => setPasswordEdit(!passwordEdit)}>
		<img src={Edit} alt="edit" />
		</button>
		</label>
		{!passwordEdit ? (
			<input
			type="text"
			name="phone"
			value={"**********"}
			disabled
			id=""
			/>
		) : (
			<>
			<input
			type="text"
			name="phone"
			placeholder="Enter new password"
			id=""
			/>
			<input
			type="text"
			name="phone"
			placeholder="Confrim new password"
			id=""
			/>
			</>
		)}
		</div>
		</div>
		
		<div>
		<div className="profile-update-button">
		<button type="submit" onClick={() => onSubmit()}>
		Save Changes
		</button>
		</div>
		</div>
		</div>
		</div>
		</div>
		</div>
	);
};

export default Profile;
