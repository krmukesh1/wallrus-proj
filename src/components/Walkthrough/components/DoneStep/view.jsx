import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import UXButton from "../../../theme/components/UXButton";
const DoneStepView = ({ classes, onClick }) => (
	<Paper className={classes.paper}>
		<Grid item container xs={12}>
			<Grid item xs={12}>
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
					Congratulations{" "}
					<span role="img" aria-label="conrats emoji">
						🎉
					</span>
				</Typography>
				<Typography
					variant="body1"
					style={{
						color: "#fff",
						fontSize: "1.1rem",
					}}
					gutterBottom
				>
					{`You have now access to see the monster's dimension.`}
				</Typography>
				{/* <Button
						fullWidth
						variant="outlined"
						color="primary"
						size="large"
						className={classes.startGameButton}
						onClick={onClick}
					>
						Start the game
					</Button> */}
				<UXButton
					onClick={onClick}
					size="large"
					className={`${classes.actionButtom} ${classes.startTestButton} ${classes.startbtn}`}
				>
					Start the game
				</UXButton>
			</Grid>
		</Grid>
	</Paper>
);

DoneStepView.propTypes = {
	classes: PropTypes.object,
	onClick: PropTypes.func,
};

export default DoneStepView;
