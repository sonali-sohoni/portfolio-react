import React from "react";
import creditUnions from "../../img/creditunions.jpg";
import lm1 from "../../img/lm1.jpg";
import history from "../../img/history.jpeg";
import homes2 from "../../img/homes2.jpeg";
import csoon from "../../img/csoon.jpg";
import cubix1 from "../../img/cubix1.jpg";
import sn from "../../img/sn.jpg";
import project6 from "../../img/project6.jpg";
const Projects = () => {
	const projects = [
		{
			name: "CAMS-ii By CBS",
			desc: "The financial product suite catering to the Credit Unions",
			img: creditUnions,
			tech: ["J2EE-Servlets", "HTML", "CSS", "JS", "jQuery", "MySQL"],
			link: "https://camsbycbs.com/",
			footer: "CAMS-ii By CBS ",
		},
		{
			name: "Lobby Management",
			desc: "- The best app for Admin professionals to check in clients, and visitors and provide the best quality service possible.",
			img: lm1,
			tech: ["HTML5", "CSS3", "MySQL", "JS", "jQuery"],
			link: "https://camsbycbs.com/",
			footer: "Lobby Management ",
		},
		{
			name: "The Missing One",
			desc: "The community Helper App allows you to share information about a missing person and join the efforts to find him/her.",
			img: project6,
			tech: ["MongoDB", "Express.js", "Node.js", "React", "GraphQL"],
			link: "https://lit-scrubland-68499.herokuapp.com/",
			footer: "The Missing One",
		},
		{
			name: "Discover History",
			desc: "Discover History -Learn what happened today or any day with Discover History!",
			img: history,
			tech: ["HTML5", "CSS3", "JS", "jQuery"],
			link: "https://cabralwilliams.github.io/discover-history/",
			footer: "Discover History",
		},
		{
			name: "MyNeighbors",
			desc: " The must-have app to track neighborhood events news and services",
			img: homes2,
			tech: ["Node.js", "Express.js", "MySQL, Sequelize", "JS", "HTML5,CSS3"],
			link: "https://myneighbor-app.herokuapp.com/",
			footer: "MyNeighbors",
		},
		{
			name: "Social Network API",
			desc: " The API to help you to build your own social network web application to enable users to share their thoughts, react to other person's thoughts, and create a friend list.",
			img: sn,
			tech: ["MongoDB", "Express.js", "Node.js", "Mongoose"],
			link: "https://github.com/sonali-sohoni/social_network_api",
			footer: "Social Network API",
		},
		// {
		// 	name: "Deep Thoughts",
		// 	img: cubix1,
		// 	tech: ["MongoDB", "Express.js", "Node.js", "React", "GraphQL"],
		// 	link: "https://github.com/sonali-sohoni/deep-thougths",
		// 	footer: "MERN -DeepThoughts",
		// },
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
					{projects.map((project, i) => (
						<div
							className="col-lg-4 col-md-6 portfolio-item filter-app"
							key={i}
						>
							<div className="portfolio-wrap">
								<img
									// src={`assets/img/${project.img}`}
									src={[project.img]}
									className="img-fluid"
									alt=""
								/>
								<div className="portfolio-info">
									<h4>{project.name} </h4>
									<h6 style={{ color: "white" }}>{project.desc}</h6>
									{/* <p>App</p> */}
									<ul className="projectTech">
										{project.tech.map((t, i) => (
											<li key={i}>{t}</li>
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
								<h6 className="my1 text-center ">
									<a href={project.link} target="_blank">
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
//				//bottom-project-name-holder
export default Projects;
