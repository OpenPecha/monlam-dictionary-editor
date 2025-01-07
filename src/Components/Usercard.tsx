import React from "react";
const Usercard = ({ user }: { user: any }) => {
  return (
    <div className="flex items-center font-inter justify-end px-2">
      <div className="mr-4">
        <p className="font-semibold text-sm">{user?.name}</p>
        <p className="text-xs bg-secondary-50 text-secondary-400 text-center px-2 py-1 border rounded-full">
          Annotator
        </p>
      </div>
      <img
        className="w-12 h-12 rounded-full object-cover"
        src={user.picture}
        alt="Profile"
      />
    </div>
  );
};

export default Usercard;
