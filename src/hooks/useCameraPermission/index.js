import { useState } from "react";
const useCameraPermission = () => {
	const [open, setOpen] = useState(false);
	const [openError, setOpenError] = useState(false);
	const [openPedastal, setopenPedastal] = useState(true);
	// const [stream, setStream] = useState();
	// const videoRef = useRef(null);
	// const [camera, setCamera] = useState(false);
	const [disable, setDisable] = useState(true);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const TryAgain = () => {
		setOpenError(false);
		setopenPedastal(true);
		// setCamera(!camera);
	};
	// useEffect(() => {
	// 	const getUserMedia = async () => {
	// 		try {
	// 			let stream = await navigator.mediaDevices.getUserMedia({ video: true });
	// 			setStream(stream);
	// 			videoRef.current.srcObject = stream;
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};
	// 	getUserMedia();
	// }, [camera]);
	// function stopVideoOnly() {
	// 	const tracks = stream.getTracks();
	// 	tracks[0].stop();
	// 	console.log(tracks);
	// }
	const handleClose = () => {
		setOpen(false);
		setOpenError(true);
		setopenPedastal(false);
	};
	const handleClosemodal = () => {
		setOpen(false);
		// stopVideoOnly();
		setDisable(false);
	};
	// const cameraHandle = () => {
	// 	stopVideoOnly();
	// };
	return {
		open,
		setOpen,
		openError,
		setOpenError,
		openPedastal,
		setopenPedastal,
		// stream,
		// setStream,
		// videoRef,
		// camera,
		// setCamera,
		disable,
		setDisable,
		handleClickOpen,
		TryAgain,
		// stopVideoOnly,
		handleClose,
		handleClosemodal,
		// cameraHandle,
	};
};

export default useCameraPermission;
