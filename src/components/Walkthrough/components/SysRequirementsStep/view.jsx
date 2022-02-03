import React from "react";
import PropTypes from "prop-types";
import positive from "../../../../assets/images/positive-vote.png";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import AppleIcon from "@material-ui/icons/Apple";
import WebIcon from "@material-ui/icons/Web";
import PublishIcon from "@material-ui/icons/Publish";
import GetAppIcon from "@material-ui/icons/GetApp";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import * as TEST_STATES from "./constants/testStates";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const RecommendationsDetailView = ({ recommendation }) => (
	<>
		<Typography variant="subtitle2" style={{ fontWeight: "bold" }} gutterBottom>
			{`${recommendation.label}`}{" "}
		</Typography>
		{recommendation.text}
	</>
);
RecommendationsDetailView.propTypes = {
	recommendation: PropTypes.object,
};

const SpeedTestDataView = ({ data }) => (
	<>
		{data.pingStatus && (
			<>
				<SettingsEthernetIcon /> {`${data.pingStatus}`}{" "}
			</>
		)}
		{data.jitterStatus && (
			<>
				<WifiTetheringIcon />
				{`${data.jitterStatus}`}{" "}
			</>
		)}
		{data.dlStatus && (
			<>
				<GetAppIcon />
				{`${data.dlStatus}`}{" "}
			</>
		)}
		{data.ulStatus && (
			<>
				<PublishIcon />
				{`${data.ulStatus}`}{" "}
			</>
		)}
	</>
);
SpeedTestDataView.propTypes = {
	data: PropTypes.object,
};

const SpeedTestView = () => (
	<>
		<ListItemAvatar className="iconSize">
			<div className="wifi-symbol">
				<div className="wifi-circle first"></div>
				<div className="wifi-circle second"></div>
				<div className="wifi-circle third"></div>
				<div className="wifi-circle fourth"></div>
			</div>
			<p className="deivce-testing">Your Device is Testing Please Wait...</p>
		</ListItemAvatar>
	</>
);
SpeedTestView.propTypes = {
	classes: PropTypes.object,
	data: PropTypes.object,
	speedTestData: PropTypes.object,
	DeviceOK: PropTypes.object,
	setSTState: PropTypes.func,
	dataset: PropTypes.bool,
};

const RequirementsListView = ({
	classes,
	os,
	version,
	browserName,
	browserVersion,
	speedTestData,
}) => (
	<List className={classes.requirementsList}>
		<ListItem className="dl-none">
			<ListItemAvatar>
				<Avatar className={classes.success}>
					<AppleIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				style={{ color: "#fff" }}
				primary="Operative System"
				secondary={`${os} ${version}`}
			/>
		</ListItem>
		<ListItem className="dl-none">
			<ListItemAvatar>
				<Avatar className={classes.success}>
					<WebIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary="Internet Browser"
				style={{ color: "#fff" }}
				secondary={`${browserName} ${browserVersion}`}
			/>
		</ListItem>

		<ListItem className="list-internet">
			<SpeedTestView
				style={{ color: "#fff" }}
				classes={classes}
				data={speedTestData}
			/>
		</ListItem>
	</List>
);

RequirementsListView.propTypes = {
	classes: PropTypes.object,
	os: PropTypes.string,
	version: PropTypes.object,
	browserName: PropTypes.object,
	browserVersion: PropTypes.object,
	speedTestData: PropTypes.object,
};
const RunningView = ({
	classes,
	os,
	version,
	browserName,
	browserVersion,
	speedTestData,
}) => (
	<>
		<RequirementsListView
			classes={classes}
			os={os}
			version={version}
			browserName={browserName}
			browserVersion={browserVersion}
			speedTestData={speedTestData}
		/>
	</>
);
RunningView.propTypes = {
	classes: PropTypes.object,
	os: PropTypes.string,
	version: PropTypes.object,
	browserName: PropTypes.object,
	browserVersion: PropTypes.object,
	speedTestData: PropTypes.object,
};
const DeviceOK = ({ speeddone }) => (
	<>
		<Typography variant="body1" style={{ color: "#fff" }} gutterBottom>
			Device is ok
		</Typography>
		<p>Ok:{speeddone}</p>
	</>
);
DeviceOK.propTypes = {
	speeddone: PropTypes.func,
};
function PromptView({ onClickCallback }) {
	useEffect(() => {
		onClickCallback();
	});
	return (
		<>
			<Typography
				variant="body1"
				style={{
					color: "#fff",
					fontFamily: "CircularAir-Light",
					padding: "10px",
					fontSize: "1rem",
				}}
				gutterBottom={true}
			>
				{`This test will let us determine if your device is powerful enough to a sustain a breach to the Monster World. it will only take a minute.`}
			</Typography>
			{/* <UXButton
				onClick={() => onClickCallback()}
				size="large"
				className={`${classes.actionButtom} ${classes.startTestButton} ${classes.startbtn}`}
			>
				Start Test
			</UXButton> */}
		</>
	);
}
PromptView.propTypes = {
	classes: PropTypes.object,
	onClickCallback: PropTypes.func,
};

const SysRequirementsStepView = ({
	classes,
	os,
	version,
	browserName,
	browserVersion,
	speedTestData,
	recommendations,
	startTestCallback,
	state,
	errorTestCallback,
	// validations,
}) => (
	<div className="step-bg">
		<div className={classes.bigContainer}>
			<Paper className={classes.paper}>
				<div className={classes.topInfo}>
					<Container maxWidth="sm" disableGutters={true}>
						<Typography
							variant="subtitle1"
							style={{
								textTransform: "upperCase",
								fontWeight: "bold",
								color: "#fff",
								fontSize: "1.5rem",
								fontFamily: "Imperator",
							}}
							gutterBottom
						>
							Testing Your <br /> Device
						</Typography>
						<div className="line"></div>
						{state === TEST_STATES.PROMPT && (
							<PromptView
								classes={classes}
								onClickCallback={startTestCallback}
							/>
						)}
						{state === TEST_STATES.RUNNING && (
							<RunningView
								classes={classes}
								os={os}
								version={version}
								browserName={browserName}
								browserVersion={browserVersion}
								speedTestData={speedTestData}
							/>
						)}
						{state === TEST_STATES.DONE && recommendations.length > 0 && (
							<div className={classes.middleInfo}>
								<img src={positive} alt="" className="img-testing" />
							</div>
						)}{" "}
					</Container>
					{state === TEST_STATES.ERROR && errorTestCallback && (
						<div>
							<h2 className="text-white font-imperator font-size">
								YOUR DEVICE IS <br /> NOT POWERFUL <br /> ENOUGH
							</h2>
							<div className="line"></div>
							<p className="p-t-b text-white font-circular">
								Unfortunately, your device is not powerful enough to sustain a
								breach. You can still learn more about the Monster World, but
								you will have to use a newer device to live this experience.
							</p>
							<Link to="/walkthrough">
								<button className="btn-home-1 font-circular mb-30">
									START THE EXPERIENCE
								</button>
							</Link>
						</div>
					)}
				</div>
			</Paper>
		</div>
	</div>
);

SysRequirementsStepView.propTypes = {
	classes: PropTypes.object,
	os: PropTypes.string,
	version: PropTypes.string,
	browserName: PropTypes.string,
	browserVersion: PropTypes.string,
	speedTestData: PropTypes.object,
	recommendations: PropTypes.array,
	startTestCallback: PropTypes.func,
	state: PropTypes.string,
	validations: PropTypes.string,
	errorTestCallback: PropTypes.func,
};

export default SysRequirementsStepView;
