import React, { useState } from "react";
import Modal from "./Modal";
import { useMutation, useQueryClient } from 'react-query';
import { ROOT_API } from '../../constants/api';
import { FaKey } from "react-icons/fa";
import Loading from "../Loading";
import axios from 'axios';

const ModalUserPw = ({setModalInputPw, id}) => {
  const queryClient = useQueryClient();
  const token = localStorage.getItem("admin");
  const [userPw, setUserPw] = useState("");
  const handleModalInputPw = () => {
    setModalInputPw((prev) => !prev);
  };
  const pwMutation = useMutation(
    () =>
      axios.put(
        `${ROOT_API}/admin/users/update/password`,
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
      onSuccess: (res) => {
        queryClient.invalidateQueries(["userList"]);
        setUserPw("");
        setModalInputPw(false);
      },
      onError: (err) => {
        console.log(err.response.data.message);
      },
    }
  );
  const handleSubmitInputPw = (e) => {
    e.preventDefault();
    pwMutation.mutate();
  };
  return (
    <Modal handleModal={handleModalInputPw} handleSubmit={handleSubmitInputPw}>
      <Modal.Header>임시 비밀번호 발급</Modal.Header>
      <Modal.Body>
        {pwMutation.isLoading ? (
          <div>
            <p className="mb-3">임시 비밀번호를 발급 중입니다.</p>
            <Loading />
          </div>
        ) : (
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <FaKey className="w-4 h-4 text-gray-500" />
            </div>
            <input
              type="text"
              id="input-pw"
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="임시 비밀번호를 입력해주세요."
            />
          </div>
        )}
        {pwMutation.isError && <p className="text-red-500">비밀번호를 재발급하는데 실패했습니다.</p>}
      </Modal.Body>
      {!pwMutation.isLoading && <Modal.Footer>확인</Modal.Footer>}
    </Modal>
  );
};

export default ModalUserPw;
