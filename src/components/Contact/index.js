import React from "react";
import { useState } from "react";
import { validateEmail } from "../../utils/helpers";
const Contact = () => {
  const [errMsg, setErrMsg] = useState("");
	const [formState, setFormState] = useState({
		name: "",
		email: "",
    message: "",
    subject:""
	});
	const { name, email, message,subject } = formState;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) setErrMsg("Email id is not valid");
      else setErrMsg("");
    } else {
      if (!e.target.value.length)
        setErrMsg(`${e.target.name} is required`);
      else setErrMsg("");
    }
    
		if(!errMsg) setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {};

	return (
		<section id="content-area" class="content-area">
			<div class="row mt-5">
				<div class="col-lg-4"></div>
				<div class="col-lg-5 mt-5 mt-lg-0">
					<h1>Contact Me</h1>
					<form
						onSubmit={handleSubmit}
						method="post"
						role="form"
						class="php-email-form"
					>
						<div class="row">
							<div class="col-md-6 form-group">
								<input
									type="text"
									name="name"
									class="form-control"
									id="name"
									placeholder="Your Name"
									required
									onBlur={handleChange}
								/>
							</div>
							<div class="col-md-6 form-group mt-3 mt-md-0">
								<input
									type="email"
									class="form-control"
									name="email"
									id="email"
									placeholder="Your Email"
									required
									onBlur={handleChange}
								/>
							</div>
						</div>
						<div class="form-group mt-3">
							<input
								type="text"
								class="form-control"
								name="subject"
								id="subject"
								placeholder="Subject"
								required
								onBlur={handleChange}
							/>
						</div>
						<div class="form-group mt-3">
							<textarea
								class="form-control"
								name="message"
								rows="5"
								placeholder="Message"
								required
								onBlur={handleChange}
							></textarea>
						</div>

						<div class="text-center mt-5">
							<button type="submit">Send Message</button>
						</div>
					</form>
				</div>
				<div class="col-lg-3 mt-5 mt-lg-0"></div>
				{/* <form id="contact-form" onSubmit={handleSubmit}>
          <div class="row">
					 <div class="col-md-6 form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							defaultValue={name}
							onBlur={handleChange}
						></input>
					</div>
				 <div class="col-md-6 form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							defaultValue={email}
							onBlur={handleChange}
						></input>
					</div>
					 <div class="col-md-6 form-group">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							defaultValue={message}
							onBlur={handleChange}
							rows="5"
						></textarea>
					</div>
          </div>
				</form> */}
			</div>
		</section>
	);
};

export default Contact;
