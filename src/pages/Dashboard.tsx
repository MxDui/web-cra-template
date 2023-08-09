import React from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-600 to-indigo-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-10 w-2/3"
      >
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to the Dashboard
        </h1>
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
      </motion.div>
    </div>
  );
};

export default Dashboard;
