const styles = (theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.primary["A100"],
		overflow: "hidden",
		backgroundSize: "cover",
		backgroundPosition: "0 400px",
	},
	smallContainer: {
		width: "60%",
	},
	bigContainer: {
		width: "100%",
	},
	stepContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	stepGrid: {
		width: "80%",
	},
	backButton: {
		marginRight: theme.spacing(1),
		width: "100%",
		textTransform: "uppercase",
		borderRadius: "30px",
		backgroundColor: "#191919",
		color: "#fff",
		marginTop: "0.8rem",
		fontSize: "1.1rem",
		border: "none",
		padding: "10px",
	},
	nextButton: {
		marginRight: theme.spacing(1),
		width: "100%",
		textTransform: "uppercase",
		borderRadius: "30px",
		backgroundColor: "#191919",
		color: "#fff",
		marginTop: "0.8rem",
		fontSize: "1.1rem",
		border: "none",
		padding: "10px",
	},
	outlinedButtom: {
		textTransform: "uppercase",
		margin: theme.spacing(1),
	},
	stepper: {
		backgroundColor: "transparent",
	},
	paper: {
		padding: theme.spacing(3),
		textAlign: "left",
		color: theme.palette.text.secondary,
	},
	topInfo: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 42,
	},
	formControl: {
		width: "100%",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	borderColumn: {
		borderBottom: `1px solid ${theme.palette.grey["100"]}`,
		paddingBottom: 24,
		marginBottom: 24,
	},
	flexBar: {
		marginTop: 0,
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	},
	requirementsList: {},
	success: {
		color: "#fff",
		backgroundColor: theme.palette.text.primary,
	},
	warning: {
		color: "#fff",
		backgroundColor: theme.palette.text.secondary,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	emailSignInButton: {
		color: "#fff",
		margin: theme.spacing(3, 0, 1),
		backgroundColor: theme.palette.primary.info,
	},
	facebookSignInButton: {
		color: "#fff",
		margin: theme.spacing(1, 0, 2),
		backgroundColor: theme.palette.primary.main,
	},
	googleSignInButton: {
		color: "#fff",
		margin: theme.spacing(1, 0, 1),
		backgroundColor: theme.palette.primary.error,
	},
	grantPermissionsButton: {
		margin: theme.spacing(3, 0, 2),
	},
	circularProgress: {
		margin: "30px 0 0 0",
		color: "#fff !important",
	},
	startGameButton: {
		margin: theme.spacing(3, 0, 2),
	},
	startTestButton: {
		marginTop: "1.5em",
	},
	startbtn: {
		borderRadius: "30px",
		backgroundColor: "#191919",
		width: "380px",
		color: "#fff",
		marginTop: "0.8rem",
		fontSize: "1.1rem",
		border: "none",
		padding: "10px",
	},
	"@media (max-width: 760px)": {
		startbtn: {
			width: "350px",
		},
	},
});
export default styles;
