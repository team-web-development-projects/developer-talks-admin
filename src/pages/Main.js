import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div className="flex flex-row container mx-auto p-10">
        <div className="flex-item w-full sm:max-w-xs bg-[#8393c9]">
          <p className="mx-auto text-[40px] text-center text-black">D-talks</p>
          <svg className="mx-auto" width={178} height={178} viewBox="0 0 178 178" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <circle cx={89} cy={89} r={89} fill="#D9D9D9" />
          </svg>
          <Link to="/">
            <div className="w-full h-14 bg-[#b6c3ef] hover:bg-slate-500">
              <p className="pl-5 h-full text-xl text-left text-white">유저관리</p>
            </div>
          </Link>
          <Link to="/side">
            <div className="w-full h-14 bg-[#b6c3ef]  hover:bg-slate-500">
              <p className="pl-5 h-full text-xl text-left text-white">공지사항</p>
            </div>
          </Link>
        </div>
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
            <div className="flex-grow p-5 rounded-[20px] bg-white" style={{ boxShadow: "5px 5px 5px 0 rgba(0,0,0,0.25)" }} >
              <p className="h-[71px] text-left text-black">특정 글에 대해 비공개여부</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
