import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const userData = localStorage.getItem("userData");
  const navigate = useNavigate();
  let user;
  if (userData) {
    user = JSON.parse(userData);
  }

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
    navigate("/signin");
  };
  return (
    <div className="min-h-screen  bg-gray-100 p-5">
      <div className=" flex flex-column items-center justify-between p-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Dashboard
        </h1>
        <button
          id="logout-link"
          onClick={handleLogout}
          className="mb-5 p-2 pb-3 bg-gray-700 hover:bg-red-400 rounded-2xl text-white font-semibold text-xl"
        >
          Logout
        </button>
      </div>
      <p className="p-5 font-semibold text-2xl text-center">{user.name}</p>
      <p className="p-5 font-semibold text-xl text-center"> {user.email}</p>
    </div>
  );
};

export default Dashboard;
