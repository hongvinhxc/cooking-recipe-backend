import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import logRequest from "middlewares/log-request";
import api from "routes/api";
import logger from "utils/logger";
import swaggerDocs from "utils/swagger";
import { testConnection } from "utils/database";

dotenv.config();

const app = express();

app.use(logRequest);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = parseInt(process.env.PORT) || 3000;

app.listen(port, async () => {
    logger.info(`Listening on http://localhost:${port}`);

    await testConnection();

    app.use("/api", api);

    swaggerDocs(app, port);
});