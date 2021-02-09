import React from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	RedditShareButton,
	RedditIcon,
	LinkedinShareButton,
	LinkedinIcon
} from 'react-share';

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="d-flex">
							<p>San Jose, CA 95124</p>
						</div>
						<div className="d-flex">
							<a href="tel:707-685-5076">(707)685-5076</a>
						</div>
						<div className="d-flex">
							<p>nkwon.work@gmail.com</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-2 col-sm-6">
						<div className="row">
							<div className="col">
								<a className="footer-nav">Home</a>
								<br />
								<a className="footer-nav">About Me</a>
								<br />
								<a className="footer-nav">Services</a>
							</div>
							<div className="col">
								<a className="footer-nav">Experience</a>
								<br />
								<a className="footer-nav">Projects</a>
								<br />
								<a className="footer-nav">Contact Me</a>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
						<div className="d-flex justify-content-center">
							<FacebookShareButton
								url={'https://github.com/nkwon320/portfolio-project'}
								quote={"Noah's Portfolio Website"}
								hashtag="#ReactPortfolio"
							>
								<FacebookIcon className="mx-3" size={36} />
							</FacebookShareButton>
							<TwitterShareButton
								url={'https://github.com/nkwon320/portfolio-project'}
								quote={"Noah's Portfolio Website"}
								hashtag="#ReactPortfolio"
							>
								<TwitterIcon className="mx-3" size={36} />
							</TwitterShareButton>
							<RedditShareButton
								url={'https://github.com/nkwon320/portfolio-project'}
								quote={"Noah's Portfolio Website"}
								hashtag="#ReactPortfolio"
							>
								<RedditIcon className="mx-3" size={36} />
							</RedditShareButton>
							<LinkedinShareButton
								url={'https://github.com/nkwon320/portfolio-project'}
								quote={"Noah's Portfolio Website"}
								hashtag="#ReactPortfolio"
							>
								<LinkedinIcon className="mx-3" size={36} />
							</LinkedinShareButton>
						</div>
						<p className="pt-3 text-center">
							Copyright &copy; {new Date().getFullYear()}&nbsp;Noah Kwon | All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
