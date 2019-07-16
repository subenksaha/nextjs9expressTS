import Link from "next/link";
import React from "react";

const DemoPage: React.FunctionComponent<any> = () => (
		<div>
				<h1>Welcome To Second Page</h1>
				<Link href="/"><button type="button">Go Back</button></Link>
		</div>
);

export default DemoPage;
