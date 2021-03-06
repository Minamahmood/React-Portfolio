import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/IMG-4373.JPG').default}
					alt="about-me"
					className="photo"
					style ={{width:'100px'}}
				/>
			</div>
			<div>
				<p>
					I am a full stack web developer looking to build a more
					intuitive user experience on the web. I currently about to earn
					a certificate in full stack development from berkeley bootcam, with newly developed
					skills in JavaScript, CSS, React.js, and responsive web
					design.
				</p>
				<p>
					my latest project on Interactive Front-End Project to{' '}
					<a
						href="https://github.com/fadhaa89/auto-tracker"
						target="_blank"
					>
						develop
					</a>{' '}
					a{' '}
					<a
						href="https://mysterious-beyond-07295.herokuapp.com/user/login"
						target="_blank"
					>
						
					</a>{' '}
                    an auto tracking system , where users can register their vehicle , view the list of their vehicle and drivers , also can do sign in and sign out
				</p>
			</div>
		</section>
	);
}

export default About;