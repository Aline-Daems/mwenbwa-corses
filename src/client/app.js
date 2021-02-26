/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";
import "../style.scss";
import TreesMap from "./components/map.js";
import ProfilMap from "./components/profil-map.js";
// import Pop from "./components/popupmap.js";

ReactDOM.render(<TreesMap />, document.querySelector("#map"));
ReactDOM.render(<ProfilMap />, document.querySelector("#profil"));
// ReactDOM.render(<Pop />, document.querySelector("#pop"));
