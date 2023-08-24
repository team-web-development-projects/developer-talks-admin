import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Status = ({ textColor, bgColor, onClick, children }) => {
  const textColorClassName = `relative inline-block px-3 py-1 font-semibold ${textColor} leading-tight cursor-pointer`;
  const bgColorClassName = `absolute inset-0 ${bgColor} opacity-50 rounded-full`;
  return (
    <div className="w-52 text-sm">
      <span className={textColorClassName} onClick={onClick}>
        <span aria-hidden className={bgColorClassName}></span>
        <div className="flex items-center">
          <span className="relative">{children}</span>
          <IoMdArrowDropdown />
        </div>
      </span>
    </div>
  );
};

export default Status;
