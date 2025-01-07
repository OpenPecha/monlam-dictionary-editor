import axios from "axios";
import React, { useEffect, useState } from "react";

interface UserData {
  name: string;
  email: string;
  role: string;
  picture: string;
}

const Usercard = ({ user }: { user: any }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const email = user?.email;
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const getUser = async () => {
      if (!email) return;

      try {
        const response = await axios.get(
          `https://api.monlamdictionary.com/api/user/${email}`,
          {
            headers: {
              apikey: API_KEY,
              accept: "application/json",
            },
          },
        );
        console.log("User data retrieved:", response.data);
        setUserData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Error fetching user:", {
            status: error.response?.status,
            data: error.response?.data,
            message: error.message,
          });
          setError("Failed to load user data");
        }
      }
    };

    getUser();
  }, [email, API_KEY]);

  if (error) {
    return <div className="text-red-500 text-sm">{error}</div>;
  }

  if (!userData) {
    return <div className="text-gray-500 text-sm">Loading...</div>;
  }

  return (
    <div className="flex items-center font-inter justify-end px-2">
      <div className="mr-4">
        <p className="font-semibold text-sm">{userData.name}</p>
        <p className="text-xs bg-secondary-50 text-secondary-400 text-center px-2 py-1 border rounded-full">
          {userData.role === "user" ? "Annotator" : userData.role}
        </p>
      </div>
      <img
        className="w-12 h-12 rounded-full object-cover"
        src={userData.picture}
        alt="Profile"
        onError={(e) => {
          e.currentTarget.src = "https://via.placeholder.com/48";
        }}
      />
    </div>
  );
};

export default Usercard;
