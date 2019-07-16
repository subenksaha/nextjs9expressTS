import Error from "next/error";
import React from "react";
import { i18n, withTranslation } from "../libs/i18n";

const ErrorPage = () => {
	return (<Error statusCode={ 500}/>);
};

ErrorPage.getInitialProps = async ({req}) => {
	return {
		namespacesRequired: ["common"]
	};
};
export default withTranslation(["common"])(ErrorPage);
