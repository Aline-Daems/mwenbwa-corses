import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
// import treesData from "../../../data/arbustum.json";
import axios from "axios";

// async function getTrees() {
//     try {
//         let trees = await axios.get("/trees");
//         console.log(trees);
//         console.log("test");
//         return trees;
//     } catch (error) {
//         console.error(error);
//     }
// }
// getTrees();

// useEffect(() => {
//     async function fetchData() {
//         const request = await axios.get("/trees");
//         setTrees(request.data);
//         return request;
//     }
//     fetchData();
// }, ["/trees"]);

// useEffect(() => {
//     const fetchData = async () => {
//         const result = await axios("/trees");
//         setTrees(result);
//     };
//     fetchData();
// }, []);

// console.log(trees);

// function getTrees() {
//     axios
//         .get("/trees")
//         .then(response => {
//             // console.log(response.data[0].arbotag);
//             // console.table(response.data);
//         })
//         .catch(e => {
//             console.log("Error :", e);
//         });
// }
// getTrees();

const TreesMap = () => {
    // const filterTree = treesData.filter(
    //     tree => tree.y_phi != null && tree.x_lambda != null,
    // );

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
                        position={[tree.y_phi, tree.x_lambda]}>
                        <Popup>
                            {"A pretty CSS3 popup."} <br />{" "}
                            {"Easily customizable."}
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
};
export default TreesMap;
