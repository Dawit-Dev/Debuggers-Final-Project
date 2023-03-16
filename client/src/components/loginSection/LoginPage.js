import React, { useState } from "react";
import { Form, Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import logo from "../../pages/SignIn/login.jpg";
import LoginIcon from "@mui/icons-material/Login";
import LoadingButton from "@mui/lab/LoadingButton";



function LoginPage({ email, setEmail }) {
	// const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	const handleEmailChange = (event) => setEmail(event.target.value);
	const handlePasswordChange = (event) => setPassword(event.target.value);

	const handleLogin = async (event) => {
		event.preventDefault();

		// Send a POST request with the email and password in the request body
		const response = await fetch("/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});

		if (response.ok) {
			// If the response is successful, store the token and isAdmin from the response in local storage
			const data = await response.json();
			localStorage.setItem("Token", data.token);
			// localStorage.setItem("isAdmin", data.isAdmin);
			// Navigate to the main page
			navigate("/user");
		} else {
			// If the response is unsuccessful, show an error message
			setErrorMessage("Invalid email or password");
		}
	};

	return (
		<>
			<Header />
			<Row className="justify-content-center mt-3 text-center">
				<Col md={6} lg={4} className="order-md-1 mb-4 mb-md-0">
					<Card
						style={{
							boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
							borderRadius: "12px",
						}}
					>
						<div
							className="text-center"
							style={{ margin: "10px", borderRadius: "12px" }}
						>
							<img
								src={logo}
								alt="Logo"
								style={{ width: "100%", height: "350px", borderRadius: "12px" }}
							/>
						</div>
						<Card.Body>
							<h3 className="mb-3">Log in</h3>
							<Form onSubmit={handleLogin}>
								<Form.Group controlId="formBasicEmail">
									{/* <Form.Label>Email address</Form.Label> */}
									<Form.Control
										type="email"
										placeholder="Enter your email address"
										value={email}
										required
										onChange={handleEmailChange}
										style={{
											width: "100%",
											boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
										}}
									/>
								</Form.Group>

								<Form.Group
									controlId="formBasicPassword"
									style={{ marginTop: "5px" }}
								>
									{/* <Form.Label>Password</Form.Label> */}
									<Form.Control
										className="mt-4"
										type="password"
										placeholder="Enter your Password"
										value={password}
										required
										onChange={handlePasswordChange}
										style={{
											width: "100%",
											boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
										}}
									/>
								</Form.Group>

								<div style={{ marginTop: "10px" }}>
									{errorMessage && (
										<p style={{ color: "red" }}>{errorMessage}</p>
									)}
								</div>
								<LoadingButton
									className="m-4"
									color="error"
									type="submit"
									loadingPosition="start"
									startIcon={<LoginIcon />}
									variant="contained"
									style={{
										width: "85%",
										boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
									}}
								>
									<span>Login</span>
								</LoadingButton>

								<div className="mt-2 text-center">
									<span className="text-muted">Don't have an account? </span>
									<Link to="/register">Sign up</Link>
								</div>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
}

export default LoginPage;



