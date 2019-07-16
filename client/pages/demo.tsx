import React from "react";
import { i18n, Link, withTranslation } from "../libs/i18n";

const DemoPage = () => (
		<div>
				<h1>Welcome To Second Page</h1>
				<Link href="/"><button type="button">Go Back</button></Link>
		</div>
);
DemoPage.getInitialProps = async ({ req }) => {
	return {
		namespacesRequired: ["common"]
	};
};
export default withTranslation(["common"])(DemoPage);
