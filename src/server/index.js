/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import mongoose from "mongoose";
import path from "path";
import {getAllTrees} from "./db";
import authRoutes from "./routes/auth.routes";

const {APP_PORT} = process.env;

// Database Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(
    `mongodb+srv://Auban:corse400@cluster0.syldx.mongodb.net/myFirstDatabase?retryWrites=true&writeConcern=majority`,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    () => console.log("You are connected to the DB Atlas"),
);
mongoose.connection.on("error", () => {
    throw new Error(`Unable to connect to database`);
});

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.use(express.json());

// pointer la route vers le dossier route
app.use("/api/auth", authRoutes);

app.get("/trees", async (req, res) => {
    const request = await getAllTrees();
    res.send(request);
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
