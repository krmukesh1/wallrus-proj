import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import "../../../../assets/css/control.css";
import ControlsImgTwo from "../../../../assets/images/breach-2.png";
const PedestalSetupStepView = ({ classes }) => (
	<div className={classes.bigContainer}>
		<Paper className={classes.paper}>
			{/* <div className={classes.topInfo}>
				<div>
					<Typography
						variant="subtitle1"
						style={{
							fontWeight: "bold",
							color: "#fff",
							fontSize: "1.5rem",
							textTransform: " uppercase",
							fontFamily: "Imperator",
						}}
						gutterBottom
					>
						Instructions
					</Typography>
					<Typography
						variant="body1"
						style={{
							color: "#fff",
							fontSize: "1.1rem",
						}}
						gutterBottom
					>
						{`Please put your phone in the pedestal to load the Monster's visor.`}
					</Typography>
				</div>
			</div> */}
			<div className="bg-home-3">
				<div className="p-5">
					<h2 className="text-white font-imperator font-size">
						Put Your Device on The Pedestal
					</h2>
					<div className="line"></div>
					<img src={ControlsImgTwo} alt="controlTwo" className="img-story" />
					<p className="p-t-b text-white font-circular mb-30">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					{/* <UXButton
						onClick={(e) => handleNext(e)}
						size="large"
						className={`${classes.actionButtom} ${classes.startTestButton} ${classes.startbtn}`}
					>
						I Understand
					</UXButton> */}
				</div>
			</div>
			<Grid item container xs={12}></Grid>
		</Paper>
	</div>
);

PedestalSetupStepView.propTypes = {
	classes: PropTypes.object,
};

export default PedestalSetupStepView;
