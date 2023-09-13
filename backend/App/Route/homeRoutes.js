import express from "express";
import home from "../Controller/Home/homeController.js";
const router = express.Router();

router.get("/", home.gethome);

export default router;