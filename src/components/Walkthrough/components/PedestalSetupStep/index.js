import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PedestalSetupStepView from "./view";
import { useQRCodeScanner } from "../../../../hooks";

const PedestalSetupStep = ({ classes, handleNext }) => {
	const { qrCodeData } = useQRCodeScanner();
	useEffect(() => {
		console.log(qrCodeData);
		if (qrCodeData) {
			handleNext();
		}
	}, [handleNext, qrCodeData]);

	return <PedestalSetupStepView classes={classes} />;
};

PedestalSetupStep.propTypes = {
	classes: PropTypes.object,
	handleNext: PropTypes.func,
};

export default PedestalSetupStep;
