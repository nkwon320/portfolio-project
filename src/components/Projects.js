import React from 'react';
import crwn from '../images/crwn-clothing-project.PNG';
import monsters from '../images/monsters-rolodex-project.PNG';
import banking from '../images/piggy-banking-project.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Projects = () => {
	//Monster Rolodex
	const openPopupboxMonster = () => {
		const content = (
			<>
				<img className="project-image-popupbox" src={monsters} alt="Monsters Rolodex" />
				<p>
					My first introduction to React.<br/>Includes:<br/>React Events,
					State vs Props, State Filtering and Searching, Class methods and Arrow Functions, Event Binding, Asynchronous
					setState, and Lifecycle methods.
				</p>
				<b>Demo: </b><a className="hyper-link" onClick={()=> window.open('https://nkwon320.github.io/monsters-rolodex/', "_blank")}>https://nkwon320.github.io/monsters-rolodex/</a><br/>
				<b> Github: </b>
				<a className="hyper-link" onClick={() => window.open('https://github.com/nkwon320/monsters-rolodex')}>
					https://github.com/nkwon320/monsters-rolodex
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigMonster = {
		titleBar: {
			enable: true,
			text: "Monsters Rolodex Project"
		},
		fadeIn: true,
		fadeInSpeed: 500
	};

		//Piggy Banking
	const openPopupboxBanking = () => {
		const content = (
			<>
				<img className="project-image-popupbox" src={banking} alt="Piggy Banking" />
				<p>
					Front-end Website created with React.<br/><br/>Includes:<br/>Smooth-Scroll, Styled-Components, and React Router. Completely responsive. Works on mobile devices as well!
				</p>
				<b>Demo: </b><a className="hyper-link" onClick={()=> window.open('https://piggy-banking.herokuapp.com/', "_blank")}>https://piggy-banking.herokuapp.com/</a><br/>
				<b> Github: </b>
				<a className="hyper-link" onClick={() => window.open('https://github.com/nkwon320/piggy-banking')}>
					https://github.com/nkwon320/piggy-banking
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigBanking = {
		titleBar: {
			enable: true,
			text: "Piggy Banking Project - Front End"
		},
		fadeIn: true,
		fadeInSpeed: 500
	};

			//Crwn-Clothing
	const openPopupboxCrwn = () => {
		const content = (
			<>
				<img className="project-image-popupbox" src={crwn} alt="Crwn Clothing" />
				<p>
					Ongoing project.<br/>Includes:<br/>React basics, React Router, Redux, Redux Saga, Asynchronous Redux, React Hooks, Context API, Firebase, Stripe API, Signin/Signout functionality with Google Signin as well, and Styled-Components.<br/><br/>Will Add Soon:<br/> GraphQL, Apollo, and mobile phone optimization.
				</p>
				<b>Demo: </b><a className="hyper-link" onClick={()=> window.open('https://noah-crwn-live.herokuapp.com/', "_blank")}>https://noah-crwn-live.herokuapp.com/</a><br/>
				<b> Github: </b>
				<a className="hyper-link" onClick={() => window.open('https://github.com/nkwon320/crwn-clothing')}>
					https://github.com/nkwon320/crwn-clothing
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigCrwn = {
		titleBar: {
			enable: true,
			text: "Crwn Clothing React App"
		},
		fadeIn: true,
		fadeInSpeed: 500
	};

	return (
		<div className="project-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center py-5">Projects</h1>
				<div className="image-box-wrapper row justify-content-center">
					<div className="project-image-box" onClick={openPopupboxMonster}>
						<img className="projects-img" src={monsters} alt="Monsters Rolodex" />
						<div className="overflow"></div>
						<FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
					</div>
					<div className="project-image-box" onClick={openPopupboxBanking}>
						<img className="projects-img" src={banking} alt="Piggy Banking Front End" />
						<div className="overflow"></div>
						<FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
					</div>
					<div className="project-image-box" onClick={openPopupboxCrwn}>
						<img className="projects-img" src={crwn} alt="Crwn-Clothing" />
						<div className="overflow"></div>
						<FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
					</div>
				</div>
			</div>
			<PopupboxContainer {...popupboxConfigMonster} />
			<PopupboxContainer {...popupboxConfigBanking} />
			<PopupboxContainer {...popupboxConfigCrwn} />
		</div>
	);
};

export default Projects;
