/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";
import mongoose from "mongoose";

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

try {
    mongoose.connect(
        "mongodb+srv://Aline:CORSES400>@cluster0.syldx.mongodb.net/LesCorses?retryWrites=true&w=majority",
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log("connected"),
    );
} catch (error) {
    console.log("could not connect");
}
