import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { ROOT_API } from "../../constants/api";
import Modal from "./Modal";

const ModalUserStatus = ({ setModalStatus, status, id }) => {
  const token = localStorage.getItem("admin");
  const queryClient = useQueryClient();
  const [selectedStatus, setSelectedStatus] = useState(status);
  const handleModalStatus = () => {
    setModalStatus((prev) => !prev);
  };
  const unsuspendMutation = useMutation(
    () =>
      axios.put(
        `${ROOT_API}/admin/users/unsuspend`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "X-AUTH-TOKEN": token,
          },
          params: {
            id: id,
          },
        }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userList"]);
        setModalStatus(false);
      },
      onError: (err) => {
        console.log(err.response.data.message);
      },
    }
  );
  const suspendMutation = useMutation(
    () =>
      axios.put(
        `${ROOT_API}/admin/users/suspend`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "X-AUTH-TOKEN": token,
          },
          params: {
            id: id,
            type: selectedStatus,
          },
        }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userList"]);
        setModalStatus(false);
      },
      onError: (err) => {
        console.log(err.response.data.message);
      },
    }
  );
  const handleSubmitStatus = (e) => {
    e.preventDefault();
    if (selectedStatus === "ACTIVE") {
      unsuspendMutation.mutate();
    } else {
      suspendMutation.mutate();
    }
  };
  return (
    <Modal handleModal={handleModalStatus} handleSubmit={handleSubmitStatus}>
      <Modal.Header>사용자 권한 변경</Modal.Header>
      <Modal.Body>
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-900 rounded-lg sm:flex ">
          {status !== "ACTIVE" && (
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  checked={selectedStatus === "ACTIVE"}
                  onChange={() => setSelectedStatus("ACTIVE")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                />
                <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                  Active
                </label>
              </div>
            </li>
          )}
          {status === "ACTIVE" && (
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-id"
                  type="radio"
                  value=""
                  name="list-radio"
                  checked={selectedStatus === "SUSPENSION"}
                  onChange={() => setSelectedStatus("SUSPENSION")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                  Suspension
                </label>
              </div>
            </li>
          )}

          {status === "ACTIVE" && (
            <li className="w-full">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-passport"
                  type="radio"
                  value=""
                  name="list-radio"
                  checked={selectedStatus === "BAN"}
                  onChange={() => setSelectedStatus("BAN")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                  Ban
                </label>
              </div>
            </li>
          )}
        </ul>
      </Modal.Body>
      <Modal.Footer>확인</Modal.Footer>
    </Modal>
  );
};

export default ModalUserStatus;
