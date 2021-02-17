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
// import HelloWorld from "./components/hello";

ReactDOM.render(<TreesMap />, document.querySelector("#map"));
