import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PermissionsStepView from "./view";
import { usePermissions } from "../../../../hooks";
// import useCameraPermission from "../../../../hooks/useCameraPermission";
const PermissionsStep = ({
	classes,
	permissionsGranted,
	handlePermissionsGranted,
	handleNoButton,
}) => {
	// const {
	// 	// open,
	// 	setOpen,
	// 	// openError,
	// 	setOpenError,
	// 	// openPedastal,
	// 	setopenPedastal,
	// 	// stream,
	// 	// setStream,
	// 	// videoRef,
	// 	camera,
	// 	setCamera,
	// 	// disable,
	// 	// setDisable,
	// } = useCameraPermission();
	const {
		requestCameraPermissions,
		requestDeviceMotionPermissions,
		requestDeviceOrientationPermissions,
	} = usePermissions();

	useEffect(() => {
		requestCameraPermissions();
		requestDeviceMotionPermissions();
		requestDeviceOrientationPermissions();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PermissionsStepView
			classes={classes}
			permissionsGranted={permissionsGranted}
			handlePermissionsGranted={handlePermissionsGranted}
			handleNoButton={handleNoButton}
			// TryAgain={TryAgain}
			// handleClickOpen={handleClickOpen}
		/>
	);
};

PermissionsStep.propTypes = {
	classes: PropTypes.object,
	permissionsGranted: PropTypes.bool,
	handlePermissionsGranted: PropTypes.func,
	handleNoButton: PropTypes.func,
	TryAgain: PropTypes.func,
	handleClickOpen: PropTypes.func,
};

export default PermissionsStep;
