import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
// import treesData from "../../../data/arbustum.json";
import axios from "axios";
import iconBlack from "../../images/flaticonblack.png";
import leafBlack from "../../images/herbal-black.png";
import iconGreen from "../../images/flaticongreen.png";
import userIcon from "../../images/pixabay-user.png";
import shop from "../../images/shopping-cart-solid.png";

import L from "leaflet";

//ICON TREE //
const markerIcon = new L.Icon({
    iconUrl: iconBlack,
    iconSize: [35, 45],
});

const TreesMap = () => {
    const [trees, setTrees] = useState([]);

    useEffect(() => {
        axios.get("/trees").then(response => {
            setTrees(response.data);
        });
    }, []);

    return (
        <MapContainer
            center={[50.630236875737616, 5.548094622321533]}
            zoom={13}
            scrollWheelZoom={true}>
            <TileLayer
                attribution={
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <MarkerClusterGroup disableClusteringAtZoom={19}>
                {trees.map(tree => (
                    <Marker
                        key={tree.id}
                        position={[tree.y_phi, tree.x_lambda]}
                        icon={markerIcon}>
                        <Popup>
                            <>
                                <img
                                    className={"iconGreen"}
                                    src={iconGreen}
                                    alt={"icon"}
                                />
                                <p className={"NameTree"}>
                                    {[tree.nom_complet]}
                                </p>
                                <div className={"iconGame"}>
                                    <img
                                        className={"iconGame__icon"}
                                        src={userIcon}
                                        alt={"icon"}
                                    />
                                    <p className={"iconGame__gamer"}>
                                        {"Nom du jouer"}
                                    </p>
                                </div>
                                <div className={"iconGame"}>
                                    <img
                                        className={"iconGame__icon"}
                                        src={leafBlack}
                                        alt={"icon"}
                                    />
                                    <p className={"iconGame__compteur"}>
                                        {"Nombre de feuilles"}
                                    </p>
                                </div>
                                <div className={"buttonPop"}>
                                    <button
                                        className={"buttonPopOne"}
                                        // eslint-disable-next-line react/button-has-type
                                        type={"button"}
                                        onClick={""}>
                                        <img
                                            className={"iconGame__shop"}
                                            src={shop}
                                            alt={"icon"}
                                        />
                                        {"Buy"}
                                    </button>
                                    <button
                                        className={"buttonPopTwo"}
                                        // eslint-disable-next-line react/button-has-type
                                        type={"button"}
                                        onClick={""}>
                                        {"+ More infos"}
                                    </button>
                                    {/* <Pop /> */}
                                </div>
                            </>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
};

export default {TreesMap};
