import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import DropDown from "./DropDown";
import Modal from "./Modal";

const TableItem = ({ data }) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const handleModalStatus = () => {
    setModalStatus(!modalStatus);
  };
  const handleModalEdit = () => {
    setModalEdit(!modalEdit);
  };
  return (
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
      <div className="w-80 text-sm">
        <p className="text-gray-900">{data.createDate}</p>
      </div>
      {data.status === "ACTIVE" && (
        <div onClick={handleModalStatus} className="w-52 text-sm cursor-pointer">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
            <div className="flex items-center">
              <span className="relative mr-1">Active</span>
              <IoMdArrowDropdown />
            </div>
          </span>
        </div>
      )}
      {data.status === "SUSPENSION" && (
        <div className="w-52 text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
            <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
            <div className="flex items-center">
              <span className="relative">Suspension</span>
              <IoMdArrowDropdown />
            </div>
          </span>
        </div>
      )}
      {data.status === "BAN" && (
        <div className="w-52 text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
            <div className="flex items-center">
              <span className="relative">Ban</span>
              <IoMdArrowDropdown />
            </div>
          </span>
        </div>
      )}
      {data.status === "QUIT" && (
        <div className="w-52 text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-amber-900 leading-tight">
            <span aria-hidden className="absolute inset-0 bg-amber-200 opacity-50 rounded-full"></span>
            <div className="flex items-center">
              <span className="relative">Quit</span>
              <IoMdArrowDropdown />
            </div>
          </span>
        </div>
      )}
      <div className="text-sm">
        <HiOutlinePencilAlt className="text-blue-500 text-lg cursor-pointer" onClick={handleModalEdit} />
      </div>
      {modalEdit && (
        <Modal handleModal={handleModalEdit}>
          <Modal.Header>유저 수정</Modal.Header>
          <Modal.Body>유저 내용</Modal.Body>
          <Modal.Footer>수정</Modal.Footer>
        </Modal>
      )}
      {modalStatus && (
        <Modal handleModal={handleModalStatus}>
          <Modal.Header>사용자 권한 변경</Modal.Header>
          <Modal.Body>
            <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-900 rounded-lg sm:flex ">
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                <div class="flex items-center pl-3">
                  <input
                    id="horizontal-list-radio-license"
                    type="radio"
                    value=""
                    name="list-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                    Active
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div class="flex items-center pl-3">
                  <input
                    id="horizontal-list-radio-id"
                    type="radio"
                    value=""
                    name="list-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                    Suspension
                  </label>
                </div>
              </li>
              <li class="w-full">
                <div class="flex items-center pl-3">
                  <input
                    id="horizontal-list-radio-passport"
                    type="radio"
                    value=""
                    name="list-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label for="horizontal-list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                    Ban
                  </label>
                </div>
              </li>
            </ul>
          </Modal.Body>
          <Modal.Footer>확인</Modal.Footer>
        </Modal>
      )}
    </li>
  );
};

export default TableItem;
