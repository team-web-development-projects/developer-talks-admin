import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ModalBoardDetail from "./Modal/ModalBoardDetail";

const TableItem3 = ({ data, type }) => {
  const [modalDetail, setModalDetail] = useState(false);
  return (
    <>
      {modalDetail && <ModalBoardDetail setModalDetail={setModalDetail} id={data.id} />}
      <li className="flex items-center px-4 py-2 border-b border-gray-200 bg-white">
        <div className="w-96 text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-full"
                src={data.profileImgUrl ? data.profileImgUrl : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-gray-900">{data.nickname}</p>
            </div>
          </div>
        </div>
        <div className="w-96 text-sm">
          <p className="text-gray-900">{data.title}</p>
        </div>
        <div className="w-44 text-sm">
          <p className="text-gray-900">{data.viewCount}</p>
        </div>
        <div className="w-44 text-sm">
          <p className="text-gray-900">{data.favoriteCount}</p>
        </div>
        <div className="w-44 text-sm">
          <p className="text-gray-900">{data.recommendCount}</p>
        </div>
        <div className="w-80 text-sm">
          <p className="text-gray-900">{data.createDate}</p>
        </div>
        <div className="text-sm">
          <AiOutlineInfoCircle className="text-blue-500 text-lg cursor-pointer" onClick={() => setModalDetail(true)} />
        </div>
        {type === "all" ? <></> : <></>}
      </li>
    </>
  );
};

export default TableItem3;
