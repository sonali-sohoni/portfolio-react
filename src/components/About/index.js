import React from "react";

const About = () => {
	return (
		<section id="content-area my-4" className="content-area">
			<div className="container">
				<div>
					<h2>Hello!!</h2>
					<p></p>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<img src="assets/img/self1.jpg" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-8 pt-4 pt-lg-0 content">
						<h3>I am a Full Stack Web Developer</h3>
						<p className="about-me-desc">
							Hello I'm Sonali Sohoni, currently working as a Software Developer
							at Commercial Business Systems,Inc. I have over 8 years of
							software development experience in building scalable web
							applications for credit unions industry. As a key member in
							development team, I got a chance to work on different technologies
							such as J2EE-servlets, HTML, CSS ,JS, MySQL etc.<br />
							<i>I am a Rice University Certified Full Stack Web Developer.</i>
						</p>
						<div className="row">
							<div className="col-lg-6">
								<ul>
									<li style={{ listStyleType: "none" }}>
										<strong>Interests</strong>
									</li>
									<li>
										<i className="bi bi-rounded-right"></i>{" "}
										<strong>MERN stack</strong>
									</li>
									<li>
										<i className="bi bi-rounded-right"></i>{" "}
										<strong>Mongoose, Sequelize,GraphQL ,MySQL</strong>
									</li>
									<li>
										<i className="bi bi-rounded-right"></i>{" "}
										<strong>HTML5, CSS3, JS, jQuery</strong>
									</li>
									<li>
										<i className="bi bi-rounded-right"></i>{" "}
										<strong>J2EE, Servlets </strong>
									</li>
								</ul>
							</div>
							<div className="col-lg-6 my-4">
								<ul>
									<li>
										<i className="bi bi-rounded-right"></i>{" "}
										<strong>
											MS in Computer Science <br />
											North Carolina State University
										</strong>
									</li>
									<li>
										<i className="bi bi-rounded-right"></i>{" "}
										<strong>Bachelors of Engineering(India)</strong>
									</li>
								</ul>
							</div>
						</div>
						<div className="container my-4">
							<div className="row">
								<article className="skill-item  col-sm">
									<div className="skill-icon">
										<img src="/assets/img/node.png" alt="Java" />
									</div>
									<h3>Node.JS</h3>
								</article>
								<article className="skill-item  col-sm">
									<div className="skill-icon">
										<img src="/assets/img/react.png" alt="Java" />
									</div>
									<h3>React</h3>
								</article>
								<article class="skill-item  col-sm">
									<div class="skill-icon">
										<img src="/assets/img/mongo.png" alt="Java" />
									</div>
									<h3>MongoDB</h3>
								</article>
								<article className="skill-item col-sm">
									<div className="skill-icon">
										<img src="/assets/img/java.png" alt="Java" />
									</div>
									<h5>Java J2EE-servlets</h5>
								</article>
							</div>
							<div className="row my-3">
								<article className="skill-item  col-sm">
									<div className="skill-icon">
										<img src="/assets/img/js.png" alt="Java" />
									</div>
									<h3>Java Scripts</h3>
								</article>

								<article class="skill-item   col-sm ">
									<div class="skill-icon">
										<img src="/assets/img/sql.png" alt="Java" />
									</div>
									<h3>SQL</h3>
								</article>
								<article className="skill-item col-sm">
									<div className="skill-icon">
										<img src="/assets/img/html.png" alt="Java" />
									</div>
									<h3>HTML 5</h3>
								</article>
								<article className="skill-item col-sm">
									<div className="skill-icon">
										<img src="/assets/img/css.png" alt="Java" />
									</div>
									<h3>CSS 3</h3>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
