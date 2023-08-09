import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GIS = () => {
  useEffect(() => {
    // This is necessary to ensure the map's tiles load correctly within its container
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-green-600 to-teal-900 ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-10 absolute inset-0  m-5"
      >
        <h1 className="text-3xl font-bold mb-4 text-center">
          GIS Visualization
        </h1>
        <p className="text-gray-700 mb-6">
          Explore geographical data interactively.
        </p>
        <div className="absolute top-20 bottom-10 left-10 right-10">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>A sample marker.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default GIS;
