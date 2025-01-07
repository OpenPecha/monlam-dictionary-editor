import React, { useEffect } from "react";
import Usercard from "./Usercard";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Navbar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout, isLoading } =
    useAuth0();

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const createUser = async () => {
      if (isAuthenticated && user) {
        try {
          await axios.post(
            "https://api.monlamdictionary.com/api/user/",
            {
              name: user.name,
              email: user.email,
              role: "user",
              picture: user.picture,
            },
            {
              headers: {
                apikey: API_KEY,
                accept: "application/json",
                "Content-Type": "application/json",
              },
            },
          );
          console.log("User created successfully");
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error("API Error:", {
              status: error.response?.status,
              data: error.response?.data,
              message: error.message,
            });
          } else {
            console.error("Unexpected error:", error);
          }
        }
      }
    };

    createUser();
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <div className="flex items-center justify-end p-4">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-end p-4">
      {isAuthenticated && <Usercard user={user} />}
      <button
        onClick={() => (isAuthenticated ? logout() : loginWithRedirect())}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
