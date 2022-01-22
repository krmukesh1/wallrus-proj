import React from "react";
import { Link } from "react-router-dom";
import story from "../../assets/images/story-1.png";
import storys from "../../assets/images/story-2.png";
import "./style.css";
const StoryStepView = () => {
	return (
		<div className="bg-color">
			<div className="bg-home-3 bg-home-story">
				<div className="p-5">
					<h2 className="text-white font-imperator font-size">THE STORY</h2>
					<div className="line"></div>
					<p className="p-t-b text-white font-circular">
						Monsters have always existed. Since our earliest recorded history,
						there have been stories about encounters and adventures with these
						mysterious creatures.
					</p>
					<img className="img-story" src={story} alt="story-1" />
					<p className="p-t-b text-white font-circular">
						You probably dont know this, but monsters live in a world very
						similar to ours. A world just outside of our reach, on the other
						side of the veil.
					</p>
					<p className="p-t-b text-white font-circular">
						What would you say if I told you that we found a way to peek at the
						other side? To open a window and let you venture into that other
						world using nothing but your mobile device?
					</p>
					<img className="img-story" src={storys} alt="storys" />
					<p className="p-t-b text-white font-circular">
						Come and take a peak, at{" "}
						<i>
							<b>The Secret Life of Monsters.</b>
						</i>
					</p>
					<Link to="/walkthrough">
						<button className="btn-home-1 font-circular mb-30">
							START THE EXPERIENCE
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default StoryStepView;
