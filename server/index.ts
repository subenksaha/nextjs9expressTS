import express from "express";
import pino from "pino";
import { handler, Next } from "./next";
import {router} from "./routes/index";

async function bootstrap() {
	const logger = pino({
		prettyPrint: true
	});

	await Next.prepare();
	const server = express();
	server.use("/", router);
		// server.get("*", (req, res) => {
		//   return handler(req, res);
		// });

	server.listen(80, (err) => {
			if (err) { throw err; }
		});
}
bootstrap();
