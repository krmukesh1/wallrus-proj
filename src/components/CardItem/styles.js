const styles = (theme) => ({
	paper: {
		padding: theme.spacing(3),
		textAlign: "left",
		color: theme.palette.text.secondary,
	},
	avatar: {
		margin: 10,
		backgroundColor: theme.palette.grey["200"],
		color: theme.palette.text.primary,
	},
	avatarContainer: {
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0,
			marginBottom: theme.spacing(4),
		},
	},
	itemContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		},
	},
	baseline: {
		alignSelf: "baseline",
		marginLeft: theme.spacing(4),
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			flexDirection: "column",
			textAlign: "center",
			alignItems: "center",
			width: "100%",
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
			marginLeft: 0,
		},
	},
	inline: {
		display: "inline-block",
		marginLeft: theme.spacing(4),
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0,
		},
	},
	inlineRight: {
		width: "30%",
		textAlign: "right",
		marginLeft: 50,
		alignSelf: "flex-end",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			margin: 0,
			textAlign: "center",
		},
	},
	backButton: {
		marginRight: theme.spacing(2),
	},
});
export default styles;
