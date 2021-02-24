import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import treesData from "../../../data/arbustum.json";
import iconBlack from "../../images/flaticonblack.png";
import leafBlack from "../../images/herbal-black.png";
import iconGreen from "../../images/flaticongreen.png";
import userIcon from "../../images/pixabay-user.png";
import L from "leaflet";

//ICON TREE //
const markerIcon = new L.Icon({
    iconUrl: iconBlack,
    iconSize: [35, 45],
});

const TreesMap = () => {
    const filterTree = treesData.filter(
        tree => tree.y_phi != null && tree.x_lambda != null,
    );
    return (
        <>
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
                    {filterTree.map((tree, arbotag) => (
                        <Marker
                            // eslint-disable-next-line react/no-array-index-key
                            key={arbotag}
                            position={[tree.y_phi, tree.x_lambda]}
                            icon={markerIcon}>
                            <Popup>
                                <>
                                    <img
                                        className={"iconGreen"}
                                        src={iconGreen}
                                    />
                                    <p>{[tree.nom_complet]}</p>
                                    <div className={"iconGame"}>
                                        <img
                                            className={"iconGame__number"}
                                            src={userIcon}
                                        />
                                        <p>{"Nom du jouer"}</p>
                                    </div>
                                    <div className={"iconGame"}>
                                        <img
                                            className={"iconGame__number"}
                                            src={leafBlack}
                                        />
                                        <p>{"Nombre de feuilles"}</p>
                                        <div className={"buttonPop"}>
                                            <button
                                                className={"buttonPop"}
                                                // eslint-disable-next-line react/button-has-type
                                                type={"button"}>
                                                {"Buy"}
                                            </button>
                                            <button
                                                className={"buttonPop"}
                                                // eslint-disable-next-line react/button-has-type
                                                type={"button"}>
                                                {"More infos"}
                                            </button>
                                        </div>
                                    </div>
                                </>
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        </>
    );
};

export default TreesMap;
