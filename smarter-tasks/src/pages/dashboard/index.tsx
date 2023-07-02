import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const userData = localStorage.getItem("userData");
  let user;
  if (userData) {
    user = JSON.parse(userData);
  }

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
  };
  return (
    <div className="min-h-screen  bg-gray-100 p-5">
      <div className=" flex flex-column items-center justify-between p-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Dashboard
        </h1>
        <Link to="/signin" id="logout-link">
          <button
            type="submit"
            id="logout"
            onClick={handleLogout}
            className="mb-5 p-2 pb-3 bg-gray-700 hover:bg-red-400 rounded-2xl text-white font-semibold text-xl"
          >
            Logout
          </button>
        </Link>
      </div>
      <h2 className="p-5 font-semibold text-2xl text-center">{user.name}</h2>
      <p className="p-5 font-semibold text-xl text-center"> {user.email}</p>
    </div>
  );
};

export default Dashboard;
