import next from "next";
import NextConfig from "../client/next.config";
const dev = process.env.NODE_ENV !== "production";

const Next = next({
	conf: NextConfig,
	dev,
	dir: "client",
	quiet: false
});
const handler = Next.getRequestHandler();

export {Next, handler} ;
