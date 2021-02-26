import React, {useState} from "react";
import {Tabs, Tab, TabPanel, TabList} from "react-web-tabs";
// import React, { Component } from 'react';
// import { render } from 'react-dom';
import Popupmap from "./modalprofil.js";
import iconUsers from "../../images/pixabay-user.png";
import iconTree from "../../images/flaticontree.png";
import iconLeaf from "../../images/feuilles-removebg-preview.png";
import Auban from "../../images/Auban.jpg";

function ProfilModal() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <img
                className={"profilButton"}
                type={"button"}
                src={iconUsers}
                onClick={togglePopup}
            />

            {isOpen && (
                <Popupmap
                    content={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <>
                            <img className={"auban"} src={Auban} />
                            <p className={"nameHello"}> {"Hello Auban"} </p>
                            <div className={"containerTree"}>
                                <img className={"iconTree"} src={iconTree} />
                                <span className={"numberTree"}>{"4"}</span>
                            </div>
                            <div className={"containerLeaf"}>
                                <img className={"iconLeaf"} src={iconLeaf} />
                                <span className={"numberLeaf"}>{"4739"}</span>
                            </div>
                            <Tabs
                                defaultTab={"one"}
                                onChange={tabId => {
                                    console.log(tabId);
                                }}>
                                <TabList>
                                    <Tab
                                        className={"buttonTabOne"}
                                        tabFor={"one"}>
                                        {"Gamelog"}
                                    </Tab>
                                    <Tab
                                        className={"buttonTabTwo"}
                                        tabFor={"two"}>
                                        {"Leaderbord"}
                                    </Tab>
                                </TabList>
                                <TabPanel tabId={"one"}>
                                    <ul className={"tabOne"}>
                                        <li>{"Noms des derniers joueurs"}</li>
                                    </ul>
                                </TabPanel>
                                <TabPanel tabId={"two"}>
                                    <ul className={"tabTwo"}>
                                        <li>{"Noms + arbres + feuilles"}</li>
                                    </ul>
                                </TabPanel>
                            </Tabs>
                        </>
                    }
                    handleClose={togglePopup}
                />
            )}
        </div>
    );
}

export default ProfilModal;
