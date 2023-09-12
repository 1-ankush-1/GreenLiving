import express from "express";
import cors from "cors";
import HandelErr from "./App/Middleware/errorHandeler.js"
import routes from "./App/Route/index.js"
import dbConnect from "./App/Config/dbConnect.js";

const app = new express();

/**
 * Middleware
*/
app.use(cors({ origin: process.env.PATH }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(HandelErr.errorLogger)
app.use(HandelErr.errorResponder)

/**
 * Database Connection
*/
dbConnect();

/**
 * Routes
*/
app.get("/", (req, res) => {
    res.send("you are in");
})
app.use("/app", routes);

app.use(HandelErr.invalidPathHandler);
app.listen(process.env.PORT || 8080, () => {
    console.log(`server running http://localhost:${process.env.PORT || 8080}`);
})