import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faPython, faReact, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
	return (
		<div id="services" className="services">
			<h1 className="py-5">languages</h1>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
							</div>
							<h3>HTML/CSS/JS</h3>
							<p>
								HTML5
								<br />
								CSS3
								<br />
								jQuery
								<br />
								Bootstrap
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faPython} size="2x" />
							</div>
							<h3>Python</h3>
							<p>
								Flask
								<br />
								MySQL
								<br />
								Ajax
								<br />
								APIs
								<br />
								Django
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faJava} size="2x" />
							</div>
							<h3>Java</h3>
							<p>
								Spring MVC
								<br />
								MySQL
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faReact} size="2x" />
							</div>
							<h3>React</h3>
							<p>
								Redux & Redux Saga
								<br />
								Hooks
								<br />
								Context API
								<br />
								Styled-Components
								<br />
								Firebase
								<br />
								Stripe API
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
