import React from "react";
import ControlsImgOne from "../../assets/images/controls-1.png";
import ControlsImgTwo from "../../assets/images/controls-2.png";
import { Link } from "react-router-dom";

const RequirementsView = () => {
	return (
		<div className="bg-color">
			<div className="bg-home-3 bg-home-story">
				<div className="p-5">
					<h2 className="text-white font-imperator font-size">
						REQUIREMENTS
						<br />& CONTROLS
					</h2>
					<div className="line"></div>
					<p className="p-t-b text-white font-circular">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<img src={ControlsImgOne} alt="controlOne" className="img-story" />
					<p className="p-t-b text-white font-circular">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<img src={ControlsImgTwo} alt="controlTwo" className="img-story" />
					<p className="p-t-b text-white font-circular mb-30">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<Link to="/walkthrough">
						<button className="btn-home-1 font-circular mb-30">
							I Understand
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RequirementsView;
