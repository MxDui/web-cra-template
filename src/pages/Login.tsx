import React, { useState } from "react";
import { useMutation } from "react-query";
import { motion } from "framer-motion";
import { Auth } from "../services/Auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation((data: { email: string; password: string }) => {
    return Auth.login(data.email, data.password);
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <div className="h-screen w-full  bg-gray-100">
      <div className="flex w-full  mx-auto overflow-hidden  shadow-xl">
        {/* Branding Part */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 items-center justify-center bg-blue-500 p-8"
        >
          <div className="text-center">
            <img
              src="/path/to/logo.png"
              alt="Logo"
              className="mb-4 w-24 h-24 mx-auto"
            />
            <h1 className="text-4xl font-bold text-white">Brand Name</h1>
            <p className="text-white mt-4">
              Welcome back! Please login to continue.
            </p>
          </div>
        </motion.div>

        {/* Login Part */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 items-center justify-center bg-white p-8 rounded-lg shadow-md h-screen"
        >
          <div className="w-96">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Your Password"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-500 text-white p-2 rounded-md"
              >
                Login
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
