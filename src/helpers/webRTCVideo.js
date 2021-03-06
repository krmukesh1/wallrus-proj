export const stopStreamedVideo = (videoElem) => {
	const stream = videoElem.srcObject;
	const tracks = stream.getTracks();

	tracks.forEach(function (track) {
		track.stop();
	});

	videoElem.srcObject = null;
};
