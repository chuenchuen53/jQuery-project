import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import { logger } from "./utils/logger";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    logger.info(`[${new Date()}] Request: ${req.path}`);
    next();
});

app.use(express.static(path.resolve(__dirname, "./static/public/html")));
app.use("/image", express.static(path.resolve("./static/public/assets/images")));
app.use((req, res) => {
    res.redirect("/404.html");
});

const PORT = 8080;
app.listen(PORT, () => {
    logger.info(`listening to port ${PORT}`);
});
