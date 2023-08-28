import axios from "axios";
import React, { useState } from "react";
import { FaKey } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useMutation, useQueryClient } from "react-query";
import { ROOT_API } from "../constants/api";
import Loading from "./Loading";
import Modal from "./Modal/Modal";
import Status from "./Status";

const TableItem = ({ data }) => {
  const queryClient = useQueryClient();
  const token = localStorage.getItem("admin");
  const [modalStatus, setModalStatus] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalPw, setModalPw] = useState(false);
  const [modalInputPw, setModalInputPw] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: data.email,
    nickname: data.nickname,
  });
  const [userPw, setUserPw] = useState("");
  const handleModalStatus = () => {
    setModalStatus(!modalStatus);
  };
  const handleModalEdit = () => {
    setModalEdit(!modalEdit);
    setUserInfo({ email: data.email, nickname: data.nickname });
  };
  const userInfoEditMutation = useMutation(
    () =>
      axios.put(
        `${ROOT_API}/admin/users/update/${data.id}/info`,
        {
          nickname: userInfo.nickname,
          email: userInfo.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-AUTH-TOKEN": token,
          },
        }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userList"]);
        setModalEdit(false);
      },
      onError: (err) => {
        console.log(err.response.data.message);
      },
    }
  );
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    userInfoEditMutation.mutate();
  };
  const handleModalPw = () => {
    setModalPw(!modalPw);
  };
  const handleSubmitPw = () => {
    setModalPw(false);
    setModalInputPw(true);
  };
  const handleModalInputPw = () => {
    setModalInputPw(!modalInputPw);
  };
  const pwMutation = useMutation(
    () =>
      axios.put(
        `${ROOT_API}/admin/users/update/${data.id}/password`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "X-AUTH-TOKEN": token,
          },
        }
      ),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries(["userList"]);
        setUserPw("");
        console.log(res.data);
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
  const handleChangeInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };
  return (
    <>
      {modalStatus && (
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
      )}
      {modalEdit && (
        <Modal handleModal={handleModalEdit} handleSubmit={handleSubmitEdit}>
          <Modal.Header>사용자 정보 수정</Modal.Header>
          <Modal.Body>
            <label htmlFor="input-email" className="block mb-2 text-sm font-medium text-gray-900">
              이메일
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-email"
                name="email"
                value={userInfo.email}
                onChange={handleChangeInfo}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              />
            </div>
            <label htmlFor="input-nickname" className="block mb-2 text-sm font-medium text-gray-900">
              닉네임
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-nickname"
                name="nickname"
                value={userInfo.nickname}
                onChange={handleChangeInfo}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              />
            </div>
            <label htmlFor="input-pw" className="block mb-2 text-sm font-medium text-gray-900">
              비밀번호
            </label>
            <button onClick={handleModalPw} className="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded text-white">
              비밀번호 재발급
            </button>
          </Modal.Body>
          <Modal.Footer>수정</Modal.Footer>
        </Modal>
      )}
      {modalPw && (
        <Modal handleModal={handleModalPw} handleSubmit={handleSubmitPw}>
          <Modal.Header>비밀번호 변경</Modal.Header>
          <Modal.Body>비밀번호를 재발급하시겠습니까?</Modal.Body>
          <Modal.Footer>확인</Modal.Footer>
        </Modal>
      )}
      {modalInputPw && (
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
      )}
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
          <Status textColor="text-green-900" bgColor="bg-green-200" onClick={handleModalStatus}>
            Active
          </Status>
        )}
        {data.status === "SUSPENSION" && (
          <Status textColor="text-orange-900" bgColor="bg-orange-200" onClick={handleModalStatus}>
            Suspension
          </Status>
        )}
        {data.status === "BAN" && (
          <Status textColor="text-red-900" bgColor="bg-red-200" onClick={handleModalStatus}>
            Ban
          </Status>
        )}
        {data.status === "QUIT" && (
          <Status textColor="text-red-900" bgColor="bg-red-200" onClick={handleModalStatus}>
            Quit
          </Status>
        )}
        <div className="text-sm">
          <HiOutlinePencilAlt className="text-blue-500 text-lg cursor-pointer" onClick={handleModalEdit} />
        </div>
      </li>
    </>
  );
};

export default TableItem;
