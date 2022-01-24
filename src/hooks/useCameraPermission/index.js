import { useState } from "react";
const useCameraPermission = () => {
	const [open, setOpen] = useState(false);
	const [openError, setOpenError] = useState(false);
	const [openPedastal, setopenPedastal] = useState(true);
	const [disable, setDisable] = useState(true);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const TryAgain = () => {
		setOpenError(false);
		setopenPedastal(true);
	};
	const handleClose = () => {
		setOpen(false);
		setOpenError(true);
		setopenPedastal(false);
	};
	const handleClosemodal = () => {
		setOpen(false);
		setDisable(false);
	};
	return {
		open,
		setOpen,
		openError,
		setOpenError,
		openPedastal,
		setopenPedastal,
		disable,
		setDisable,
		handleClickOpen,
		TryAgain,
		handleClose,
		handleClosemodal,
	};
};

export default useCameraPermission;
