import React from "react";
import creditUnions from "../../img/creditunions.jpg";
import lm1 from "../../img/lm1.jpg";
import history from "../../img/history.jpeg";
import homes2 from "../../img/homes2.jpeg";
import passwords from "../../img/passwords.jpg";
import cubix1 from "../../img/cubix1.jpg";
import sn from "../../img/sn.jpg";
const Projects = () => {
	const projects = [
		{
			name: "CAMS-ii By CBS",
			img: creditUnions,
			tech: ["J2EE-Servlets", "HTML", "CSS", "JS", "jQuery", "MySQL"],
			link: "https://camsbycbs.com/",
			footer: "CAMS-ii By CBS",
		},
		{
			name: "Lobby Management",
			img: lm1,
			tech: ["HTML5", "CSS3", "MySQL", "JS", "jQuery"],
			link: "https://camsbycbs.com/",
			footer: "Lobby Management",
		},
		{
			name: "Discover History",
			img: history,
			tech: ["HTML5", "CSS3", "JS", "jQuery"],
			link: "https://cabralwilliams.github.io/discover-history/",
			footer: "Discover History",
		},
		{
			name: "MyNeighbors - neighborhood communication platform ",
			img: homes2,
			tech: ["Node.js", "Express.js", "MySQL, Sequelize", "JS", "HTML5,CSS3"],
			link: "https://myneighbor-app.herokuapp.com/",
			footer: "MyNeighbors",
		},
		{
			name: "Social Network API",
			img: sn,
			tech: ["MongoDB", "Express.js", "Node.js", "Mongoose"],
			link: "https://github.com/sonali-sohoni/social_network_api",
			footer: "Social Network API",
		},
		{
			name: "MERN",
			img: passwords,
			tech: ["MongoDB", "Express.js", "Node.js", "React", "GraphQL"],
			link: "#",
			footer: "MERN",
		},
		{
			name: "Deep Thoughts",
			img: cubix1,
			tech: ["MongoDB", "Express.js", "Node.js", "React", "GraphQL"],
			link: "https://github.com/sonali-sohoni/deep-thougths",
			footer: "MERN -DeepThoughts",
		},
	];

	return (
		<section id="content-area my-4 " className="content-area portfolio">
			<div className="container">
				<div className="section-title">
					<h2>Portfolio</h2>
					<p></p>
				</div>

				<div
					className="row portfolio-container"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					{projects.map((project) => (
						<div className="col-lg-4 col-md-6 portfolio-item filter-app">
							<div className="portfolio-wrap">
								<img
									// src={`assets/img/${project.img}`}
									src={[project.img]}
									className="img-fluid"
									alt=""
								/>
								<div className="portfolio-info">
									<h4>{project.name} </h4>
									{/* <p>App</p> */}
									<ul className="projectTech">
										{project.tech.map((t) => (
											<li>{t}</li>
										))}
									</ul>
									<div className="portfolio-links">
										<a
											// href={`assets/img/${project.img}`}
											href={[project.img]}
											data-gallery="portfolioGallery"
											className="portfolio-lightbox"
											title={project.footer}
											target="_blank"
										>
											<i className="bx bx-plus"></i>
										</a>
										<a
											href={project.link}
											className="portfolio-details-lightbox"
											data-glightbox="type: external"
											title="Portfolio Details"
											target="_blank"
										>
											<i className="bx bx-link"></i>
										</a>
									</div>
								</div>
								<h6 classname="my1 text-center bottom-project-name-holder">
									<a href="https://camsbycbs.com/" target="_blank">
										<span style={{ textAlign: "center" }}>
											<strong>{`  ${project.footer}`}</strong>
										</span>
									</a>
								</h6>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
