/* becodeorg/mwenbwa
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import tree from "./pictures/tree2.png";
import sign from "./pictures/sign.png";
import herbal from "./pictures/blackherbal.png";
import branch from "./pictures/branch.png";
import panel from "./pictures/panel.png";
import useModal from "./use-modal";
import Modal from "./modal";
import React from "react";

export default function App() {
    const {isShowing: isLoginFormShowed, toggle: toggleLoginForm} = useModal();
    const {
        isShowing: isRegistrationFormShowed,
        toggle: toggleRegistrationForm,
    } = useModal();

    return (
        <>
            <div className={"App"}>
                <h1 className={"title"}>{"Team Les Corsés"}</h1>
                <p className={"subtitle"}>{"Mwenbwbutton project"} </p>
                <img className={"branch"} src={branch} />
                <div className={"flex flex-wrap"}>
                    <img src={tree} className={"tree"} />
                    <div className={"signContainer"}>
                        <img src={sign} className={"sign"} />
                        <button
                            className={"signin"}
                            onClick={toggleLoginForm}
                            type={"button"}>
                            {"Sign in"}
                        </button>
                        <button
                            className={"signup"}
                            onClick={toggleRegistrationForm}
                            type={"button"}>
                            {"Sign Up"}
                        </button>
                        <button className={"rules"} type={"button"}>
                            {" Rules"}
                        </button>
                        <button className={"about"} type={"button"}>
                            {"About"}
                        </button>
                        <button className={"exit"} type={"button"}>
                            {"Exit"}
                        </button>

                        <Modal
                            isShowing={isLoginFormShowed}
                            hide={toggleLoginForm}
                            title={"Sign in"}>
                            <img src={panel} className={"panel"} />
                            <form>
                                <input
                                    type={"text"}
                                    id={"name"}
                                    name={"user_name"}
                                    className={"input-Username"}
                                    placeholder={"Username"}
                                />
                                <input
                                    type={"password"}
                                    id={"name"}
                                    name={"user_name"}
                                    className={"input-Password"}
                                    placeholder={"Password"}
                                />
                            </form>
                            <button
                                type={"button"}
                                className={"login"}
                                onClick={""}
                                value={"Login"}>
                                {"Login"}
                            </button>
                        </Modal>
                        <Modal
                            isShowing={isRegistrationFormShowed}
                            hide={toggleRegistrationForm}
                            title={"Sign Up"}>
                            <img src={panel} className={"panel"} />
                            <div className={"colors"}>
                                <p>{"Pick a color"}</p>
                                <button className={"purple"} type={"button"} />
                                <button className={"red"} type={"button"} />
                                <button className={"green"} type={"button"} />
                                <button className={"yellow"} type={"button"} />
                                <button className={"blue"} type={"button"} />
                            </div>
                            <form>
                                <input
                                    type={"text"}
                                    id={"name"}
                                    name={"user_name"}
                                    className={"input-Name"}
                                    placeholder={"Username"}
                                />
                                <input
                                    type={"password"}
                                    id={"name"}
                                    name={"user_name"}
                                    className={"input-Name"}
                                    placeholder={"Password"}
                                />
                                <input
                                    type={"email"}
                                    id={"name"}
                                    name={"user_name"}
                                    className={"input-Email"}
                                    placeholder={"Email"}
                                />
                            </form>
                            <button
                                type={"button"}
                                className={"login-signup"}
                                onClick={""}
                                value={"Login"}>
                                {"Login"}
                            </button>
                        </Modal>
                    </div>
                    <div className={"herbalContainer"}>
                        <img src={herbal} className={"herbal"} />
                    </div>
                </div>
            </div>
        </>
    );
}
