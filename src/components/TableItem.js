import React from "react";

const TableItem = ({ data }) => {
  return (
    <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-10 h-10">
            <img
              class="w-full h-full rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap">{data.userid}</p>
          </div>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{data.email}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{data.nickname}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{data.createDate}</p>
      </td>
      {data.status === "ACTIVE" && (
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
            <span class="relative">Active</span>
          </span>
        </td>
      )}
      {data.status === "SUSPENSION" && (
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
            <span aria-hidden class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
            <span class="relative">Suspension</span>
          </span>
        </td>
      )}
      {data.status === "BAN" && (
        <td class="px-5 py-5 bg-white text-sm">
          <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
            <span class="relative">Ban</span>
          </span>
        </td>
      )}
      {data.status === "QUIT" && (
        <td class="px-5 py-5 bg-white text-sm">
          <span class="relative inline-block px-3 py-1 font-semibold text-amber-900 leading-tight">
            <span aria-hidden class="absolute inset-0 bg-amber-200 opacity-50 rounded-full"></span>
            <span class="relative">Quit</span>
          </span>
        </td>
      )}
    </tr>
  );
};

export default TableItem;
