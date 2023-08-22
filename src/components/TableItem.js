import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import DropDown from "./DropDown";
import Modal from "./Modal";

const TableItem = ({ data }) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <li className="flex items-center px-4 py-2 border-b border-gray-200 bg-white">
      <div className="w-96 text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiBvGN_TTMm-NrBF6CEj8ZpjOibejLM7KJO6rIRYVqVA&s"
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
        <div className="w-52 text-sm cursor-pointer">
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
        <HiOutlinePencilAlt className="text-blue-500 text-lg cursor-pointer" onClick={handleModal} />
        {modal && 
          <Modal handleModal={handleModal}>
            <Modal.Header>유저 수정</Modal.Header>
            <Modal.Body>유저 내용</Modal.Body>
            <Modal.Footer>수정</Modal.Footer>
          </Modal>}
      </div>
    </li>
  );
};

export default TableItem;
