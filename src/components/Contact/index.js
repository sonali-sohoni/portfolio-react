import React from "react";
import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
	const [errMsg, setErrMsg] = useState("");
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
		subject: "",
	});
	const { name, email, message, subject } = formState;

	const handleChange = (e) => {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) setErrMsg("Email id is not valid");
			else setErrMsg("");
		} else {
			if (!e.target.value.length) setErrMsg(`${e.target.name} is required`);
			else setErrMsg("");
		}

		if (!errMsg)
			setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
	};

	return (
		<section id="content-area" className="content-area">
			<div className="row mt-5">
				<div className="col-lg-4"></div>
				<div className="col-lg-5 mt-5 mt-lg-0">
					<h1>Contact Me</h1>
					<form onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-md-6 form-group">
								<input
									type="text"
									name="name"
									className="form-control"
									id="name"
									placeholder="Your Name"
									required
									onBlur={handleChange}
									defaultValue={name}
								/>
							</div>
							<div className="col-md-6 form-group mt-3 mt-md-0">
								<input
									type="email"
									className="form-control"
									name="email"
									id="email"
									placeholder="Your Email"
									required
									defaultValue={email}
									onBlur={handleChange}
								/>
							</div>
						</div>
						<div className="form-group mt-3">
							<input
								type="text"
								className="form-control"
								name="subject"
								id="subject"
								placeholder="Subject"
								defaultValue={subject}
								required
								onBlur={handleChange}
							/>
						</div>
						<div className="form-group mt-3">
							<textarea
								className="form-control"
								name="message"
								rows="5"
								placeholder="Message"
								defaultValue={message}
								required
								onBlur={handleChange}
							></textarea>
						</div>

						<div className="text-center mt-5">
							<button type="submit">Send Message</button>
						</div>
					</form>
				</div>
				<div className="col-lg-3 mt-5 mt-lg-0"></div>
				{}
			</div>
		</section>
	);
};

export default Contact;
