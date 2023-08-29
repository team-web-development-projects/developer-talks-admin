import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarItem = ({ linkUrl, children }) => {
  const location = useLocation();
  return (
    <li className="min-w-max">
      <Link
        to={linkUrl}
        className={
          location.pathname === linkUrl
            ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
            : "flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
        }
      >
       {children}
      </Link>
    </li>
  );
};

export default SideBarItem;
