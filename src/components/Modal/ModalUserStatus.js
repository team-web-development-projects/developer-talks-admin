import React from "react";
import Modal from "./Modal";

const ModalUserStatus = ({ setModalStatus }) => {
  const handleModalStatus = () => {
    setModalStatus((prev) => !prev);
  };
  return (
    <Modal handleModal={handleModalStatus}>
      <Modal.Header>사용자 권한 변경</Modal.Header>
      <Modal.Body>
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-900 rounded-lg sm:flex ">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              />
              <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                Active
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-id"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                Suspension
              </label>
            </div>
          </li>
          <li className="w-full">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-passport"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                Ban
              </label>
            </div>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>확인</Modal.Footer>
    </Modal>
  );
};

export default ModalUserStatus;
