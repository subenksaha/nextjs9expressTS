import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { i18n, withTranslation } from "../libs/i18n";

const HomePage = ({t}) => (
	<div>
			<h1>Hello, World!</h1>
			<button type="button" onClick={() => i18n.changeLanguage(i18n.language === "en" ? "bn" : "en")}>
				{t("app.name")}
			</button>
			<Link href="/demo"><button type="button">Goto Second Page</button></Link>
	</div>
);
HomePage.getInitialProps = async ({ req }) => {
	return {
		namespacesRequired: ["common"]
	};
};
export default withTranslation(["common"])(HomePage);
