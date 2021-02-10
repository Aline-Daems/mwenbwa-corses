/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";

const mongoose = require("mongoose");

const {APP_PORT} = process.env;

const app = express();

console.log("coucou");

mongoose
    .connect(
        "mongodb+srv://Aline:corses400@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority",
        {useNewUrlParser: true, useUnifiedTopology: true},
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
