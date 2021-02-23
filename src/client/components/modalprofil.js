import React from "react";

const Popupmap = props => (
    <div className={"popup-box"}>
        <div className={"box"}>
            <span className={"close-icon"} onClick={props.handleClose}>
                {"x"}
            </span>
            {props.content}
        </div>
    </div>
);

export default Popupmap;
