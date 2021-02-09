import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
	return (
		<div id="about" className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					<div className="photo-wrap mb-5">
						<img className="profile-img" src={author} alt="author..." />
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading">About Me</h1>
					<p>
						Hello! My name is Noah Kwon and I have been coding for the past 2 years. I am a full stack software engineer
						just beginning my journey in the development industry. Technologies that I am familiar with are HTML/CSS,
						JavaScript, Python, and Java. I learned these languages while attending a coding bootcamp called Coding Dojo
						is San Jose, CA. In between learning these languages, I also spent time with classmates solving algorithms
						and finding optimal solutions to problems.<br></br>
						<br></br>
						After graduating from the bootcamp, I continued my studies by watching videos on YouTube, taking additional
						courses on Udemy, and reading books about programming. Currently, I am learning React! I am excited to
						create responsive web applications that not only function at a high level, but also have an appealing
						font-end design.<br></br>
						<br></br>I am also familiar with deploying web applications to Heroku and uploading projects to Github. My
						next step after finishing my studies in React is to familiarize myself with AWS so that I can further
						develop my deployment knowledge. If you have any further questions or would like to connect, please feel
						free to reach out to my LinkedIn, Email me, or simply navigate to my Contact page. Thanks for reading and
						have a great day!
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
