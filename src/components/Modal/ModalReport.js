import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { ROOT_API } from "../../constants/api";
import Modal from "./Modal";

const ModalReport = ({ setModalReport, id, type }) => {
  const token = localStorage.getItem("admin");
  const queryClient = useQueryClient();
  const [selectedStatus, setSelectedStatus] = useState();
  const handleModalReport = () => {
    setModalReport((prev) => !prev);
  };
  const reportMutation = useMutation(
    () =>
      axios.put(
        `${ROOT_API}/admin/reports/handle/${type}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "X-AUTH-TOKEN": token,
          },
          params: {
            reportedObjectId: id,
            resultType: selectedStatus,
          },
        }
      ),
    {
      onSuccess: () => {
        type === "USER" ? queryClient.invalidateQueries(["userList"]) : queryClient.invalidateQueries(["boardList"]);
        setModalReport(false);
      },
      onError: (err) => {
        console.log(err.response.data.message);
      },
    }
  );

  const handleSubmitReport = (e) => {
    e.preventDefault();
    reportMutation.mutate();
  };

  return (
    <>
      <Modal handleModal={handleModalReport} handleSubmit={handleSubmitReport}>
        <Modal.Header>{type === "USER" ? "사용자 권한 변경" : "게시글 권한 변경"}</Modal.Header>
        <Modal.Body>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-900 rounded-lg sm:flex ">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  onChange={() => setSelectedStatus("NP")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                />
                <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                  활성화
                </label>
              </div>
            </li>
            {type === "USER" ? (
              <>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-id"
                      type="radio"
                      value=""
                      name="list-radio"
                      onChange={() => setSelectedStatus("SUSPENSION")}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                      정지
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
                      onChange={() => setSelectedStatus("BAN")}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                      차단
                    </label>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="w-full">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-passport"
                      type="radio"
                      value=""
                      name="list-radio"
                      onChange={() => setSelectedStatus("FORBIDDEN")}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                      숨김
                    </label>
                  </div>
                </li>
              </>
            )}
          </ul>
        </Modal.Body>
        <Modal.Footer>확인</Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalReport;
