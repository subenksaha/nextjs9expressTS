import express from "express";
import nextI18NextMiddleware from "next-i18next/middleware";
import path from "path";
import pino from "pino";
import nextI18next from "../libs/i18n";
import { handler, Next } from "./next";
import {router} from "./routes/index";

async function bootstrap() {
	const logger = pino({
		prettyPrint: true
	});
	const port = parseInt("80", 10);

	await Next.prepare();

	const server = express();
	server.use(nextI18NextMiddleware(nextI18next));
	server.use("/static", express.static("static"));
	server.use("/", router);
	server.get("*", (req, res) => {
		return handler(req, res);
	});

	await server.listen(port);
	// tslint:disable-next-line: no-console
	console.log(`🚀 Ready on http://localhost:${port}`);
}
bootstrap();
