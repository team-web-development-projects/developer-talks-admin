import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { ROOT_API } from "../constants/api";
import TableItem from "../components/TableItem";

const Users = () => {
  const token = localStorage.getItem("admin");
  async function getUserList() {
    const { data } = await axios.get(`${ROOT_API}/admin/users`, {
      params: { page: 0, size: 10 },
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": token,
      },
    });
    return data;
  }

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [],
    queryFn: getUserList,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error...</div>;

  return (
    <>
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center">
          <div>
            <h2 className="text-gray-600 font-semibold">유저관리</h2>
            <span className="text-xs">전체 유저</span>
          </div>
        </div>
        <div className="mx-4 sm:-mx-8 px-4 sm:px-8 py-4">
          <div className="shadow rounded-lg">
            <div className="">
              <div>
                <div className="flex px-4 py-3 border-b-2 border-gray-200 bg-gray-100">
                  <div className="w-96 text-left text-xs font-semibold text-gray-600">USERID</div>
                  <div className="w-96 text-left text-xs font-semibold text-gray-600">EMAIL</div>
                  <div className="w-80 text-left text-xs font-semibold text-gray-600">NICKNAME</div>
                  <div className="w-80 text-left text-xs font-semibold text-gray-600">CREATE_DATE</div>
                  <div className="w-52 text-left text-xs font-semibold text-gray-600">STAUTS</div>
                  <div className="text-left text-xs font-semibold text-gray-600">EDIT</div>
                </div>
              </div>
              <ul>
                {data.totalElements ? data.content.map((board, index) => <TableItem key={index} data={board} />) : <li>등록된 유저가 없습니다.</li>}
              </ul>
            </div>
            <div className="px-2 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
              <div className="inline-flex mt-2 mb-2 xs:mt-0">
                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                  이전
                </button>
                <span className="text-xs xs:text-sm text-gray-900">{`1 / 2 page`}</span>
                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                  다음
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
