import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	const [nvExpand, setNvExpand] = useState(false);
	const [nvColor, setNvColor] = useState(false);

	return (
		<div className="container-fluid d-flex justify-content-between align-items-center">
			<h1 className="logo me-auto me-lg-0">
				<a href="index.html">Sonali Sohoni</a>
			</h1>

			<nav id="navbar" className="navbar order-last order-lg-0">
				<ul>
					<li>
						<a className="active" href="index.html">
							Home
						</a>
					</li>
					<li>
						<Link to={`/about`}>About</Link>
					</li>
					<li>
						<a href="resume.html">Resume</a>
					</li>
					<li>
						<a href="services.html">Services</a>
					</li>
					<li>
						<Link to={`/projects`}>Portfolio</Link>
					</li>
					<li>
						<a href="contact.html">Contact</a>
					</li>
				</ul>
				<i className="bi bi-list mobile-nav-toggle"></i>
			</nav>

			<div className="header-social-links"></div>
		</div>
	);
	// return (
	// 	<nav
	// 		className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
	// 		id="mainNav"
	// 	>
	// 		<div className="container">
	// 			<a className="navbar-brand" href="#page-top">
	// 				Start Bootstrap
	// 			</a>
	// 			<button
	// 				className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
	// 				type="button"
	// 				data-bs-toggle="collapse"
	// 				data-bs-target="#navbarResponsive"
	// 				aria-controls="navbarResponsive"
	// 				aria-expanded="false"
	// 				aria-label="Toggle navigation"
	// 			>
	// 				Menu
	// 				<i className="fas fa-bars"></i>
	// 			</button>
	// 			<div className="collapse navbar-collapse" id="navbarResponsive">
	// 				<ul className="navbar-nav ms-auto">
	// 					<li className="nav-item mx-0 mx-lg-1">
	// 						<a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">
	// 							Portfolio
	// 						</a>
	// 					</li>
	// 					<li className="nav-item mx-0 mx-lg-1">
	// 						<a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
	// 							About
	// 						</a>
	// 					</li>
	// 					<li className="nav-item mx-0 mx-lg-1">
	// 						<a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">
	// 							Contact
	// 						</a>
	// 					</li>
	// 				</ul>
	// 			</div>
	// 		</div>
	// 	</nav>
	// );
};

export default Navigation;
