import React from "react";
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';



function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/Minamahmood"
					target="_blank"
					rel="noopener noreferrer"
				>
					 <AiFillGithub/>

				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/Minamahmood/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiFillLinkedin/>
               

				</a>
			</div>
			<div>

			</div>
		</footer>
	);
}

export default Footer;