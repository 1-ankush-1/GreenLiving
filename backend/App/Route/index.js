import express from "express";
import Home from "./homeRoutes.js";
const router = express.Router();

/** 
 * All Routes
*/
router.use("/home", Home);


export default router;