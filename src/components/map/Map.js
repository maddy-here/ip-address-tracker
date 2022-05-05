// import React, { useEffect, useContext } from "react";

// import { useMap } from "react-leaflet";
// // Map, Marker, TileLayer,

// const MyMap = () => {
//   const map = useMap();
//   console.log("map center: ", map.getCenter());
//   return null;

//   // useEffect(() => {
//   //   // ctx.loadMap(lat, lng);
//   // }, []);

//   // return (
//   //   <Map id="map" className={styles.map}>
//   //     k
//   //   </Map>
//   // );
// };

// // function MapComponent() {
// //   return (
// //     <MapComponent center={[50.5, 30.5]} zoom={13}>
// //       {/* <MyMap /> */}
// //     </MapComponent>
// //   );
// // }

// export default MapComponent;

import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";
import context from "../../store/context";

const Map = () => {
  const ctx = useContext(context);
  const { lat, lng } = ctx.coords;
  return (
    <MapContainer
      key={JSON.stringify(lat)}
      scrollWheelZoom={true}
      className={styles.map}
      center={[lat, lng]}
      zoom={11}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=Ng4Yj3MlNUOQ52SoUQYq"
      />
      <Marker position={[lat, lng]}>
        <Popup>Users Location</Popup>
      </Marker>
    </MapContainer>

    // <MapContainer center={[50.5, 30.5]} zoom={10} className={styles.map}>
    //   <TileLayer
    //     url="https://api.maptiler.com/maps/hybrid/style.json?key=Ng4Yj3MlNUOQ52SoUQYq"
    //     attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    //   />
    // </MapContainer>
  );
};

export default Map;
