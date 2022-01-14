/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import PropTypes from "prop-types";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import UXButton from "../../../theme/components/UXButton";
import useCameraPermission from "../../../../hooks/useCameraPermission";
const PermissionsStepView = ({
	classes,
	permissionsGranted,
	handlePermissionsGranted,
}) => {
	const {
		open,
		openError,
		openPedastal,
		videoRef,
		disable,
		handleClickOpen,
		TryAgain,
		handleClose,
		handleClosemodal,
		cameraHandle,
	} = useCameraPermission();
	return (
		<div className={classes.bigContainer}>
			{openPedastal && (
				<Paper className={classes.paper}>
					<div className={classes.topInfo}>
						<div>
							<h2 className="text-white font-imperator font-size text-uppercase">
								Pedestal Setup
							</h2>
							<div className="line"></div>
							<p className="p-t-b text-white font-circular">
								Please accept for this app to use the position sensors, as well
								as the camera and mic.
							</p>
						</div>
					</div>
					<div>
						<Dialog
							open={open}
							onClose={handleClose}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogContent>
								<DialogContentText id="alert-dialog-description">
									Allow the app to use the camera,mic and positions sensors
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button
									onClick={() => {
										handleClose();
										cameraHandle();
									}}
									color="primary"
								>
									No
								</Button>
								<Button
									onClick={(e) => {
										handleClosemodal();
										handlePermissionsGranted(e);
									}}
									color="primary"
								>
									Yes
								</Button>
							</DialogActions>
						</Dialog>
					</div>

					<Grid item container xs={12}>
						<Grid item xs={12}>
							<UXButton
								onClick={() => {
									if (disable) {
										handleClickOpen();
									}
								}}
								size="large"
								className={`${classes.actionButtom} ${classes.startTestButton} ${classes.startbtn}`}
							>
								Grant Permissions
							</UXButton>
						</Grid>

						<Grid item xs={12} className={classes.circularProgress}>
							{permissionsGranted ? (
								<Typography
									style={{ textTransform: "uppercase" }}
									color="white"
									gutterBottom
								>
									Thank you!
								</Typography>
							) : (
								<Fade
									in={permissionsGranted === false}
									style={{
										transitionDelay:
											permissionsGranted === false ? "800ms" : "0ms",
									}}
									unmountOnExit
								>
									<div
										className="direct-video"
										style={{ width: "100% !important" }}
									>
										<video
											style={{
												width: "100% !important",
												position: "relative !important",
											}}
											ref={videoRef}
											autoPlay
										/>
									</div>

									{/* <video id="video" width="600px" height="400px" autoPlay></video> */}
									{/* <CircularProgress size="5rem" /> */}
								</Fade>
							)}
						</Grid>
					</Grid>
				</Paper>
			)}
			{openError && (
				<Paper className={classes.paper}>
					<h2 className="text-white font-imperator font-size text-uppercase">
						Error
					</h2>
					<div className="line"></div>
					<p className="p-t-b text-white font-circular">
						Game is not possible without accesing phone sensors.
					</p>
					<button className="permissionBtn mt-5" onClick={TryAgain}>
						Try Again
					</button>
				</Paper>
			)}
		</div>
	);
};

PermissionsStepView.propTypes = {
	classes: PropTypes.object,
	permissionsGranted: PropTypes.bool,
	handlePermissionsGranted: PropTypes.func,
	isNextButtonDisabled: PropTypes.bool,
	handleNoButton: PropTypes.func,
	handleClickOpen: PropTypes.func,
	TryAgain: PropTypes.func,
	stopVideoOnly: PropTypes.func,
	handleClose: PropTypes.func,
	handleClosemodal: PropTypes.func,
	cameraHandle: PropTypes.func,
};

export default PermissionsStepView;
