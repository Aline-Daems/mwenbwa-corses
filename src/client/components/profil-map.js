import React from "react";
import ProfilModal from "./profil.js";
const ReactDOM = require("react-dom");

function ProfilMap() {
    return (
        <div>
            <ProfilModal />
        </div>
    );
}

ReactDOM.render(<ProfilMap />, document.querySelector("#profil"));
