import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";

const PrivateComponent = () => {
  const { isLoggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-gray-500">Checking User...</h1>
      </div>
    );
  }

  return isLoggedIn ? <Outlet/> : <Navigate to={"/login"}/>
};

export default PrivateComponent;
