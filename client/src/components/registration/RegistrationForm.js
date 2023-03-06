import React, { useState, useEffect } from "react";
import Header from "../Header";

import "./RegistrationForm.css";

const RegistrationForm = () => {
	const [formData, setFormData] = useState([]);
	const [isSuccess, setIsSuccess] = useState(false);

	// const fetchRegister = () => {
	//      console.log("test");
	//      fetch("/api/register")
	//          .then((res) => res.json())
	//          .then((data) => {
	//              console.log(data);
	//              setFormData(data);
	//          });
	//  };
	//  useEffect(() => {
	//      fetchRegister();
	//  }, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		//send form data to backend
		fetch("/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data.message);
				// setIsSuccess(true);
				// console.log(data.message);
				alert(data.message);
				// window.location.href = "/login";
			})
			.catch((err) => {
				console.error(err);
			});
	};

	// useEffect(() => {
	// 	if (isSuccess) {
	// 		setTimeout(() => {
	// 			window.location.href = "/login";
	// 		}, 2000);
	// 	}
	// }, [isSuccess]);
	//update code

	return (
		<div>
			<Header />
			<div className="form-container">
				{isSuccess ? (
					<p className="success-message">You signed up successfully!</p>
				) : (
					<div>
						<h1 className="titleRegister">Register Your Account</h1>
						<form className="registerForm" onSubmit={handleSubmit}>
							<div style={{ marginBottom: "10px" }}>
								<label className="form-label" htmlFor="firstName">
									First Name:
								</label>
								<input
									className="form-input"
									type="text"
									placeholder="First Name"
									name="firstName"
									onChange={handleInputChange}
									required
								/>
							</div>
							<div style={{ marginBottom: "10px" }}>
								<label className="form-label" htmlFor="lastName">
									Last Name:
								</label>
								<input
									className="form-input"
									type="text"
									placeholder="Last Name"
									name="lastName"
									onChange={handleInputChange}
									required
								/>
							</div>
							<div style={{ marginBottom: "10px" }}>
								<label className="form-label" htmlFor="email">
									Email:
								</label>
								<input
									className="form-input"
									type="email"
									placeholder="Enter email"
									name="email"
									onChange={handleInputChange}
									required
								/>
							</div>
							<div style={{ marginBottom: "10px" }}>
								<label className="form-label" htmlFor="password">
									Password:
								</label>
								<input
									className="form-input"
									type="password"
									placeholder="Password"
									name="password"
									onChange={handleInputChange}
									required
								/>
							</div>

							<div style={{ marginBottom: "10px" }}>
								<label className="form-label" htmlFor="languages">
									What languages would you like to learn?
								</label>
								<div className="languages-container">
									<div>
										<input
											type="checkbox"
											id="english"
											name="english"
											className="checkBox"
										/>
										<label className="form-label" htmlFor="english">
											🇬🇧 English
										</label>
									</div>

									<div>
										<input
											type="checkbox"
											id="spanish"
											name="spanish"
											className="checkBox"
										/>
										<label className="form-label" htmlFor="spanish">
											🇪🇸 Spanish
										</label>
									</div>

									<div>
										<input
											type="checkbox"
											id="german"
											name="german"
											className="checkBox"
										/>
										<label className="form-label" htmlFor="german">
											🇩🇪 German
										</label>
									</div>

									<div>
										<input
											type="checkbox"
											id="italian"
											name="italian"
											className="checkBox"
										/>
										<label className="form-label" htmlFor="italian">
											🇮🇹 Italian
										</label>
									</div>

									<div>
										<input
											type="checkbox"
											id="indian"
											name="indian"
											className="checkBox"
										/>
										<label className="form-label" htmlFor="indian">
											🇮🇳 Indian
										</label>
									</div>

									<div>
										<input
											type="checkbox"
											id="chinese"
											name="chinese"
											className="checkBox"
										/>
										<label className="form-label" htmlFor="chinese">
											🇨🇳 Chinese
										</label>
									</div>
								</div>
							</div>

							<div style={{ marginBottom: "10px" }}>
								<label className="form-label" htmlFor="isAdmin">
									Admin:{" "}
								</label>
								<input
									type="checkbox"
									name="isAdmin"
									onChange={handleInputChange}
								/>
							</div>

							<button className="RegisterButton" type="submit">
								Register
							</button>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};

export default RegistrationForm;






