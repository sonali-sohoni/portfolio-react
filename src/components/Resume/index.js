import React from "react";

const Resume = () => {
	return (
		<section id="content-area  my-4" className="content-area resume">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>Resume</h2>
					
				</div>

				<div className="row">
					<div className="col-lg-6">
						<h3 className="resume-title">Sumary</h3>
						<div className="resume-item pb-0">
							<h4>Sonali Sohoni</h4>
							<p>
								<em>
									Passionate, deadline-driven full stack web developer with 8+
									years experience.
									<br />
									Well versed with the modern web technologies such as
									MongoDB,Node.js,Express.js,React
									<br />
									Proven strong technical and analytical skills
								</em>
							</p>
							<p>
								<ul>
									<li>sonali.sohoni@gmail.com</li>
									<li>
										<a href="https://github.com/sonali-sohoni">
											GitHub profile
										</a>
									</li>
								</ul>
							</p>
						</div>

						<h3 className="resume-title">Education</h3>
						<div className="resume-item">
							<h4>Cerfified Full Stack Web Developer</h4>
							<h5>2022</h5>
							<p>
								<em>Rice University, TX</em>
							</p>
						</div>

						<div className="resume-item">
							<h4>Masters of Computer Science</h4>
							<h5>2009 - 2010</h5>
							<p>
								<em>North Carolina State University, NC</em>
							</p>
						</div>
						<div className="resume-item">
							<h4>Bachelors of Computer Science</h4>
							<h5>2004 </h5>
							<p>
								<em>Pune University, India</em>
							</p>
						</div>
					</div>
					<div className="col-lg-6">
						<h3 className="resume-title">Professional Experience</h3>
						<div className="resume-item">
							<h4>Software Developer</h4>
							<h5>2013 - Present</h5>
							<p>
								<em>Commercial Business Systems,NC </em>
							</p>
							<p>
								<ul>
									<li>
										Development of new features, code enhancements ,change
										requests for CBS proprietary software - ‘CAMS-ii’ using
										Java, J2EE technologies.
									</li>
									<li>
										Work actively in all stages of software development life
										cycle including requirement analysis, design, coding and
										unit testing.
									</li>
									<li>
										Develop responsive UIs using HTML, CSS, JavaScript, jQuery,
										Ajax frameworks
									</li>
									<li>
										Implemented interfaces to access third party web services
										using popular REST and SOAP APIs
									</li>
									<li>
										Work and resolve assigned defects as per priority and
										severity. Write development analysis,QA and deployment
										guidelines on Trello card associated with that defect.
										Provide assistance to the support team and/or customer reps
										for issue/defect resolution.
									</li>
									<li>
										Provide necessary inputs to technical writers to prepare
										software release notes.
									</li>
									<li>
										Work closely with different EFTs such as Fiserv, COOP, Elan
										etc. and make necessary code changes to conform with mandate
										releases by these EFTs. Support handling of debit,credit and
										ATM card transaction processing messages as per ISO8583
										standard through online and/or nightly batch file
										maintenance.{" "}
									</li>
									<li>
										Assist in certification testing with EFTs to help existing
										clients to switch to new EFT platform.
									</li>
								</ul>
							</p>
						</div>
						<div className="resume-item">
							<h4>Full Stack Web Development Projects Work </h4>
							<h5>2021 - 2022</h5>
							<p>
								<em>Rice University,TX</em>
							</p>
							<p>
								MyNeighbors (https://myneighbor-app.herokuapp.com/ )–
								Neighborhood portal is a responsive web application where
								registered users of the neighborhood can exchange, comment, and
								share ideas, news, events and much more.
							</p>
							<p>
								<ul>
									<li>
										Implemented MVC architecture using client and server side
										technologies such as Node.js, Express.js, HTML5, CSS3,
										Bootstrap MySQL
									</li>
									<li>
										Developed the server-side logic using REST API and sequelize
										ORM
									</li>
									<li>
										Involved in Coding, styling, testing of reusable JavaScript,
										CSS3, HTML5 widgets/ libraries for complete UI controls.
									</li>
									<li>
										Carried out in peer-to-peer code reviews for crosschecking
										the coding standards and integration of client and
										server-side components.
									</li>
								</ul>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
