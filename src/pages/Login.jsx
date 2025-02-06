import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    // Add your login logic here
  };
  const door1 =
    "https://images.unsplash.com/photo-1577670552647-6ce12a463e7d?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const door =
    "https://plus.unsplash.com/premium_photo-1678998932668-3bcc0831366e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="min-h-screen flex">
      {/* Left Side: Image Section */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover  bg-center"
        style={{
          backgroundImage: `url(${door1})`,
        }}
      ></div>

      {/* Right Side: Form Section */}
      {/* <div className="max-w-md w-full bg-cyan-700 p-8 rounded-xl border-4 border-yellow-500 shadow-xl shadow-yellow-500/50 space-y-6"> */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-nav ">
        <div className="max-w-md w-full bg-cyan-700 p-8 rounded-xl shadow-lg space-y-6 rounded-xl border-1 border-yellow-500 shadow-lg space-y-6">
          <h2 className="text-4xl font-bold text-lime-100 mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-lime-100"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-lime-100"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="text-sky-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
