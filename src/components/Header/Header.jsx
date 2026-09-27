import React from "react";
import profile from "..//../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between p-4 mx-4 shadow-sm">
      <h1 className="text-4xl font-bold text-gray-700">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
