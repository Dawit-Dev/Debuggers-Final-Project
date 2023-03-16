import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingModal from "./BookingModal";
import "./Booking.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../Header";

function Booking({ eventId }) {
	const [event, setEvent] = useState(null);
console.log(eventId);
	useEffect(() => {
		fetch(`/api/events/${eventId}`)
			.then((res) => res.json())
			.then((data) => setEvent(data))
			.catch((err) => console.log(err));
	}, [eventId]);

	if (!event) {
		return <div>Loading...</div>;
	}
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString();
	};

	return (
		<div>
			<Header />
			<Container
				className="d-flex justify-content-center align-items-center h-100"
				style={{ marginTop: "5%" }}
			>
				<Card className="rounded shadow" style={{ width: "900px" }}>
					<Card.Img
						variant="top"
						src={event[0].img}
						className="example-class-name rounded shadow"
						style={{
							height: "300px",
							width: "95%",
							margin: "2.5%",
							objectFit: "cover",
						}}
					/>

					<Card.Body>
						<Row>
							<h3
								className="text-primary"
								style={{ paddingLeft: "30px", fontSize: "22px" }}
							>
								{event[0].title}
							</h3>
							<Col md style={{ paddingLeft: "30px", fontSize: "20px" }}>
								<p className="descriptionEvent">{event[0].description}</p>
								<p>Event date: {formatDate(event[0].date)}</p>
								<p>Event location: {event[0].location}</p>
							</Col>
							<Col md className="d-flex align-items-end justify-content-end">
								<BookingModal eventId={eventId} />
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

export default Booking;

