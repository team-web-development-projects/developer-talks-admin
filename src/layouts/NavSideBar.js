import React from "react";
import { AiFillNotification, AiOutlineDown } from "react-icons/ai";
import { BiSolidDetail } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import SideBarItem from "../components/SideBarItem";

const NavSideBar = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
          <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <div className="w-max p-2.5">
                <img src="https://tailus.io/images/logo.svg" className="w-32" alt="" />
              </div>
              <ul className="mt-6 space-y-2 tracking-wide">
                <li>
                  <ul>
                    <SideBarItem linkUrl="/home/users">
                      <BsFillPersonFill className="group-hover:text-cyan-600" />
                      <span className="group-hover:text-cyan-500">전체 유저</span>
                    </SideBarItem>
                    <SideBarItem linkUrl="/home/reportUsers">
                      <BsFillPersonFill className="group-hover:text-cyan-600" />
                      <span className="group-hover:text-cyan-500">신고 유저</span>
                    </SideBarItem>
                  </ul>
                </li>
                <SideBarItem linkUrl="/home/board">
                  <BiSolidDetail className="group-hover:text-cyan-600" />
                  <span className="group-hover:text-gray-700">게시글 관리</span>
                </SideBarItem>
                <SideBarItem linkUrl="/home/notice">
                  <AiFillNotification />
                  <span className="group-hover:text-gray-700">공지글 관리</span>
                </SideBarItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSideBar;
