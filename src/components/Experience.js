import React from 'react';

const Experience = () => {
	return (
		<div id="experience" className="experience">
			<div className="d-flex justify-content-center my-5">
				<h1>experience</h1>
			</div>
			<div className="container experience-wrapper">
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2018</h3>
						<h3>Human Resources Consultant - Dynamic Signal</h3>
						<p>
							- Updated training processes by reviewing existing documentation, leveraging feedback from associates, and
							working with legal and compliance teams.
							<br />
							- Liaised between multiple business devisions to improve communications.
							<br />
							- Facilitated cultural integration planning and developed strategies to foster employee engagement and
							commitment.
							<br />- Partnered with senior leadership to establish and develop corporate and HR policies and
							procedures.
						</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2019</h3>
						<h3>Workplace Coordinator - Illumio</h3>
						<p>
							- Coordinated and executed all elements of company events including logistics, budgets, venue selection,
							activity planning, transportation and entertainment.
							<br />
							- Managed office activities by maintaining communication between clients, tracking records and filing all
							documents.
							<br />
							- Maintained accurate, current and compliant financial records by monitoring and addressing variances.
							<br />- Oversaw expenditures and worked with accounting department to manage budgets.
						</p>
					</div>
				</div>
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2020 - Career Change!</h3>
						<h3>Coding Dojo Bootcamp</h3>
						<p>
							- Through this 14 week coding boot-camp, I learned three Full Stacks of web dev languages.
							<br />
							- Understanding of each language was tested through timed exams to replicate functionality and user
							interface.
							<br />- Spend 1000+ hours coding, completed ~60 assignments/projects, and 80+ whiteboard algorithm
							sessions.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
