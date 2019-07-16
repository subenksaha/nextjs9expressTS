import React from "react";
import { i18n, withTranslation } from "../libs/i18n";

class ErrorPage extends React.Component<any, any> {
	public static async getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return {
			namespacesRequired: ["common"],
			statusCode,
		};
	}

	public render() {
		return (
			<p>
				{this.props.statusCode
					? `An error ${this.props.statusCode} occurred on server`
					: "An error occurred on client"}
			</p>
		);
	}
}

export default withTranslation(["common"])(ErrorPage);
