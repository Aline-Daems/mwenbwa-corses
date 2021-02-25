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
    const {isShowing: isRulesShowed, toggle: togglerules} = useModal();
    const {isShowing: isAboutShowed, toggle: toggleabout} = useModal();
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
                        <button
                            className={"rules"}
                            onClick={togglerules}
                            type={"button"}>
                            {" Rules"}
                        </button>
                        <button
                            className={"about"}
                            onClick={toggleabout}
                            type={"button"}>
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
                                {"Submit"}
                            </button>
                        </Modal>
                        <Modal
                            isShowing={isRulesShowed}
                            hide={togglerules}
                            title={"Rules"}>
                            <img src={panel} className={"panel"} />
                            <p className={"rules-text"}>
                                {
                                    " Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu : et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu’amour ! Et finalement, quand beaucoup de gens aujourd’hui me disent « Mais comment fais-tu pour avoir cette humanité ? », et bien je leur réponds très simplement, je leur dis que c’est ce goût de l’amour ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique, mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi... "
                                }
                            </p>
                        </Modal>
                        <Modal
                            isShowing={isAboutShowed}
                            hide={toggleabout}
                            title={"About"}>
                            <img src={panel} className={"panel"} />
                            <p className={"rules-text"}>
                                {
                                    "This project is create by the crazy team Les Corsés. In this team, we can see the beautiful Camélia Jarek, the amazing Auban Labie, the legendary Magali Garot and the unreal Aline Daems.  For coding this project, we will use React, MangoDB & Nodejs ( And a lot cups of coffee) "
                                }
                            </p>
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
