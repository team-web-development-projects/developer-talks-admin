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
            : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            className="fill-current text-gray-600 group-hover:text-cyan-600"
            fill-rule="evenodd"
            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
            clip-rule="evenodd"
          />
          <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
        <span className="group-hover:text-gray-700">유저 관리</span>
      </Link>
    </li>
  );
};

export default SideBarItem;
