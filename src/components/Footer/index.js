import React from "react";

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container">
				<div className="copyright">
					&copy; Copyright{" "}
					<strong>
						<span>Sonali Sohoni</span>
					</strong>
					&copy;2022 All Rights Reserved
				</div>
				<div className="credits"></div>
				<div className="header-social-links">
					<a
						href="https://github.com/sonali-sohoni"
						className="github"
						target="_blank"
					>
						<i className="bi bi-github"></i>
					</a>

					<a
						href="https://www.linkedin.com/in/sonali-sohoni-3652556/"
						className="linkedin"
						target="_blank"
					>
						<i className="bi bi-linkedin"></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
