import express from "express";
import { Next } from "../next";
import { DemoRouter } from "./demo";

const router = express.Router();

router.use("/demo", DemoRouter);

router.get("/", (req, res) => {
		// map to /pages/index
		Next.render(req, res, "/", {});
});
export { router };
