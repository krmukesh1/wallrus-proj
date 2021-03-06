import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = (theme) => ({
	container: {
		maxWidth: 600,
		flexGrow: 1,
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	bottomMargin: {
		marginBottom: theme.spacing(2),
	},
	stepsContainer: {},
});

class BaseDialog extends Component {
	render() {
		const { classes, open, onClose } = this.props;
		return (
			<Dialog
				open={open}
				onClose={onClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				scroll="body"
			>
				<DialogTitle id="alert-dialog-title"></DialogTitle>
				<DialogContent>
					<DialogContentText component={"div"} id="alert-dialog-description">
						<div className={classes.container}>{this.props.children}</div>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		);
	}
}
BaseDialog.propTypes = {
	classes: PropTypes.object,
	open: PropTypes.bool,
	onClose: PropTypes.func,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default withStyles(styles)(BaseDialog);
