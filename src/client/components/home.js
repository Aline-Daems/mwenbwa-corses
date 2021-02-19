/* becodeorg/mwenbwa
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import tree from "./pictures/tree2.png";
import sign from "./pictures/sign.png";
import herbal from "./pictures/blackherbal.png";
import branch from "./pictures/branch.png";
const HelloWorld = () => (
    <div>
        <h1 className={"title"}>{"Team Les Corsés"}</h1>
        <p className={"subtitle"}>{"Mwenbwa project"} </p>
        <img className={"branch"} src={branch} />
        <div className={"flex flex-wrap"}>
            <img src={tree} className={"tree"} />
            <div className={"signContainer"}>
                <img src={sign} className={"sign"} />
                <p className={"signin"}>{"Sign In"}</p>
                <p className={"signup"}>{"Sign Up"} </p>
                <p className={"rules"}>{" Rules"}</p>
                <p className={"about"}>{"About"}</p>
                <p className={"exit"}>{"Exit"}</p>
            </div>
            <div className={"herbalContainer"}>
                <img src={herbal} className={"herbal"} />
            </div>
        </div>
    </div>
);

export default HelloWorld;
