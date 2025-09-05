import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const MyMap = () => {
  return (
    <div className="h-[500px] mt-5 rounded-xl overflow-hidden">
      <MapContainer
        center={[41.3111, 69.2797]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Marker */}
        <Marker position={[41.3111, 69.2797]}>
          <Popup>Toshkent markazi</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
