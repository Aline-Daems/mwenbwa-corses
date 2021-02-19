/* ICON TREE artist => https://www.flaticon.com/fr/icone-gratuite/forme-darbre_41409 */

import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import treesData from "../../../data/arbustum.json";
import iconBlack from "../../images/flaticonblack.png";
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
                            {[tree.nom_complet]} <br />
                            {"Nom du jouer"}
                            {"Nombre de feuilles"}
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
};
export default TreesMap;
