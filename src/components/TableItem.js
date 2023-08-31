import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import ModalReport from "./Modal/ModalReport";
import ModalUserEdit from "./Modal/ModalUserEdit";
import ModalUserStatus from "./Modal/ModalUserStatus";
import Status from "./Status";

const TableItem = ({ data, type, resultType }) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalReport, setModalReport] = useState(false);
  const [status, setStatus] = useState("");

  const handleModalStatus = (t) => {
    if (t === "QUIT") {
      window.alert("탈퇴한 유저는 권한을 변경하실 수 없습니다.");
    } else {
      setStatus(t);
      setModalStatus((prev) => !prev);
    }
  };

  return (
    <>
      {modalStatus && <ModalUserStatus setModalStatus={setModalStatus} status={status} id={data.id} />}
      {modalEdit && <ModalUserEdit setModalEdit={setModalEdit} data={data} />}
      {modalReport && <ModalReport setModalReport={setModalReport} id={data.id} type="USER"/>}
      <li className="flex items-center px-4 py-2 border-b border-gray-200 bg-white">
        <div className="w-96 text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              {/* <img
                className="w-full h-full rounded-full"
                src={
                  data.profileImgUrl
                    ? data.profileImgUrl
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt=""
              /> */}
            </div>
            <div className="ml-3">
              <p className="text-gray-900">{data.userid}</p>
            </div>
          </div>
        </div>
        <div className="w-96 text-sm">
          <p className="text-gray-900">{data.email}</p>
        </div>
        <div className="w-80 text-sm">
          <p className="text-gray-900">{data.nickname}</p>
        </div>
        {type === "all" ? (
          <>
            <div className="w-80 text-sm">
              <p className="text-gray-900">{data.createDate}</p>
            </div>
            {data.status === "ACTIVE" && (
              <Status textColor="text-green-900" bgColor="bg-green-200" onClick={() => handleModalStatus("ACTIVE")}>
                Active
              </Status>
            )}
            {data.status === "SUSPENSION" && (
              <Status textColor="text-orange-900" bgColor="bg-orange-200" onClick={() => handleModalStatus("SUSPENSION")}>
                Suspension
              </Status>
            )}
            {data.status === "BAN" && (
              <Status textColor="text-red-900" bgColor="bg-red-200" onClick={() => handleModalStatus("BAN")}>
                Ban
              </Status>
            )}
            {data.status === "QUIT" && (
              <Status textColor="text-red-900" bgColor="bg-red-200" onClick={() => handleModalStatus("QUIT")}>
                Quit
              </Status>
            )}
            <div className="text-sm">
              <HiOutlinePencilAlt className="text-blue-500 text-lg cursor-pointer" onClick={() => setModalEdit(true)} />
            </div>
          </>
        ) : (
          <>
            {resultType === "WAIT" && (
              <Status textColor="text-orange-900" bgColor="bg-orange-200" onClick={() => setModalReport(true)}>
                WAIT
              </Status>
            )}
            <div className="text-sm">
              <AiOutlineInfoCircle className="text-blue-500 text-lg cursor-pointer" onClick={() => {}} />
            </div>
          </>
        )}
      </li>
    </>
  );
};

export default TableItem;
