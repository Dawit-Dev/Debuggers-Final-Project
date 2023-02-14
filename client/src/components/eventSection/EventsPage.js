import React, { useState, useEffect } from "react";
import "./appEvent.css";

function EventsPage() {
	const [events, setEvents] = useState([]);

	const fetchEvent = () => {
		console.log("test");
		fetch(`/api/events`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setEvents(data);
			});
	};

	useEffect(() => {
		fetchEvent();
	}, []);

	return events.map((event) => (
		<section className="event" key={event.id}>
			<div class="row">
				<div className="titleEvent">
					<h1>{event.title}</h1>
					<img width="500" height="300" src={event.img} title="Event Title" />
					<h2>{event.location}</h2>
					<h2>{event.date}</h2>
					<p className = "descriptionEvent">{event.description}</p>
				</div>
			</div>
		</section>
	));
}

export default EventsPage;
