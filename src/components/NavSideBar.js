import React from "react";
import { Link } from "react-router-dom";

const NavSideBar = () => {
  return (
    <>
      <div className="flex-item w-full sm:max-w-xs bg-[#8393c9]">
        <p className="mx-auto text-[40px] text-center text-black">D-talks</p>
        <svg
          className="mx-auto"
          width={178}
          height={178}
          viewBox="0 0 178 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx={89} cy={89} r={89} fill="#D9D9D9" />
        </svg>
        <Link to="/home/users">
          <div className="w-full h-14 bg-[#b6c3ef] hover:bg-slate-500">
            <p className="pl-5 h-full text-xl text-left text-white">유저관리</p>
          </div>
        </Link>
        <Link to="/home/main">
          <div className="w-full h-14 bg-[#b6c3ef]  hover:bg-slate-500">
            <p className="pl-5 h-full text-xl text-left text-white">공지사항</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavSideBar;
