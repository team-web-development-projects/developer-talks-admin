import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { ROOT_API } from "../constants/api";
import TableItem from "../components/TableItem";

const Users = () => {
  async function getUserList() {
    const { data } = await axios.get(`${ROOT_API}/admin/user/`, {
      params: { page: 0, size: 10 },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  }

  const { data, isLoading, refetch } = useQuery({
    queryKey: [],
    queryFn: getUserList,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center">
          <div>
            <h2 class="text-gray-600 font-semibold">유저관리</h2>
            <span class="text-xs">전체 유저</span>
          </div>
        </div>
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      USERID
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      EMAIL
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      NICKNAME
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      CREATE_DATE
                    </th>
                    <th class="py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      STAUTS
                    </th>
                    <th class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      EDIT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.totalElements ? data.content.map((board, index) => <TableItem key={index} data={board} />) : <li>등록된 유저가 없습니다.</li>}
                </tbody>
              </table>
              <div class="px-2 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                <div class="inline-flex mt-2 mb-2 xs:mt-0">
                  <button class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                    이전
                  </button>
                  &nbsp; &nbsp;
                  <button class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                    다음
                  </button>
                </div>
                <span class="text-xs xs:text-sm text-gray-900">{`1 of 5 page`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
