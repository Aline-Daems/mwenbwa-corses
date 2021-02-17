// import React from "react";
// import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-markercluster";
// import treesData from "../../../data/arbustum.json";
// import L from 'leaflet';

// //ICON TREE ////
// const markerIcon = new L.Icon({
//   iconUrl: require("../../images/flaticon.png"),
//   iconSize : [35, 45],
// })

// const TreesMap = () => {
//     const filterTree = treesData.filter(
//         tree => tree.y_phi != null && tree.x_lambda != null,
//     );
//     return (
//         <MapContainer
//             center={[50.630236875737616, 5.548094622321533]}
//             zoom={13}
//             scrollWheelZoom={true}>
//             <TileLayer
//                 attribution={
//                     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 }
//                 url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
//             />
//             <MarkerClusterGroup disableClusteringAtZoom={19}>
//                 {filterTree.map((tree, index) => (
//                     <Marker
//                     key={index}
//                     position={[tree.y_phi, tree.x_lambda]}
//                     icon={markerIcon}
//                     >
//                         <Popup>
//                             {"A pretty CSS3 popup."} <br />{" "}
//                             {"Easily customizable."}
//                         </Popup>
//                     </Marker>
//                 ))}
//             </MarkerClusterGroup>
//         </MapContainer>
//     );
// };
// export default TreesMap;

//ICON TREE ////
// const markerIcon = new L.Icon({
//   iconUrl: require("../../images/flaticon.png"),
//   iconSize : [35, 45],
// })

// {arbustData.map((arbust, index) => (
//   <MarkerClusterGroup>
//   <Marker
//   key={[index]}
//   position={[arbust.y_phi, arbust.x_lambda]}
//   // icon={markerIcon}
//   />
//   </MarkerClusterGroup>
//   ))}

// console.log(arbustData);
//{arbustData.map(tree => console.log(tree.geoloc.lat))}
