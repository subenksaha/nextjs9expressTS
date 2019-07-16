import express from "express";
import {Next} from "../next";

const DemoRouter = express.Router();

DemoRouter
.get("/", (req, res) => {
		// map to /pages/demo
		res.send({});
});
export { DemoRouter } ;
