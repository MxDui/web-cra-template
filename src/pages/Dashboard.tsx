import React from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-full bg-gradient-to-br from-blue-600 to-indigo-900"
    >
      {/* Header */}
      <div className="bg-white p-4 shadow-md">
        <h1 className="text-xl font-bold text-gray-800">Brand Name</h1>
      </div>

      {/* Main Content */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="bg-gray-800 w-1/4 p-4 text-white">
          <ul>
            <li className="mb-2 hover:bg-gray-700 px-2 py-1 rounded">Home</li>
            <li className="mb-2 hover:bg-gray-700 px-2 py-1 rounded">
              Statistics
            </li>
            <li className="mb-2 hover:bg-gray-700 px-2 py-1 rounded">
              Reports
            </li>
            <li className="mb-2 hover:bg-gray-700 px-2 py-1 rounded">
              Settings
            </li>
          </ul>
        </div>

        {/* Main Dashboard Content */}
        <div className="flex-1 bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
          <p className="text-gray-700 mb-6">
            Here you'll find various statistics, reports, and configurations for
            your application.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-700 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-2">Statistics</h2>
              <p className="text-white">
                View detailed analytics about your app's performance.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-700 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-2">Reports</h2>
              <p className="text-white">
                Check out the latest reports submitted by users.
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button color="primary">Explore Dashboard</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
