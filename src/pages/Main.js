import React from "react";
import axios from "axios";
import { ROOT_API } from "../constants/api";

const Main = () => {
  return (
    <>
    
      <div className="flex-item w-full container p-10 bg-[#f1f1f1]">
        <p className="h-[71px] text-3xl text-center text-black">관리자 권한 설정</p>
        <div className="flex space-x-10 w-full">
          <div className="flex-grow p-5 h-[706px] rounded-[20px] bg-white" style={{ boxShadow: "5px 5px 10px 0 rgba(0,0,0,0.25)" }}>
            <p className="h-[71px] text-left text-black">회원등급조정</p>
          </div>
          <div className="flex-grow flex flex-col gap-10 h-[706px]">
            <div className="rounded-[20px] p-5 h-full bg-white" style={{ boxShadow: "5px 5px 5px 0 rgba(0,0,0,0.25)" }}>
              <p className="text-left text-black">회원정지, 해제</p>
            </div>
            <div className="rounded-[20px] p-5 h-full bg-white" style={{ boxShadow: "5px 5px 5px 0 rgba(0,0,0,0.25)" }}>
              <p className="text-left text-black">회원그래프</p>
            </div>
          </div>
          <div className="flex-grow p-5 rounded-[20px] bg-white" style={{ boxShadow: "5px 5px 5px 0 rgba(0,0,0,0.25)" }}>
            <p className="h-[71px] text-left text-black">특정 글에 대해 비공개여부</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
