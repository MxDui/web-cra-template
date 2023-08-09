import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GIS = () => {
  useEffect(() => {
    // This is necessary to ensure the map's tiles load correctly within its container
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-full  flex"
    >
      {/* Sidebar */}
      <div className="bg-gray-800 w-1/4 p-4 text-white">
        <h2 className="text-2xl font-bold mb-4">GIS Navigation</h2>
        <ul>
          <li className="mb-2 hover:bg-gray-700 px-2 py-1 rounded">
            Map Overview
          </li>
          <li className="mb-2 hover:bg-gray-700 px-2 py-1 rounded">
            Statistics
          </li>
          <li className="mb-2 hover:bg-gray-700 px-2 py-1 rounded">Reports</li>
          <li className="mb-2 hover:bg-gray-700 px-2 py-1 rounded">Settings</li>
        </ul>
      </div>

      {/* GIS Content */}
      <div className="flex-1 relative bg-white shadow-lg p-10 ">
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
      </div>
    </motion.div>
  );
};

export default GIS;
