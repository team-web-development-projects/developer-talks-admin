import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";

const TableItem = ({ data }) => {
  return (
    <tr>
      <td class="px-4 py-2 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-10 h-10">
            <img
              class="w-full h-full rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiBvGN_TTMm-NrBF6CEj8ZpjOibejLM7KJO6rIRYVqVA&s"
              alt=""
            />
          </div>
          <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap">{data.userid}</p>
          </div>
        </div>
      </td>
      <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{data.email}</p>
      </td>
      <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{data.nickname}</p>
      </td>
      <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{data.createDate}</p>
      </td>
      {data.status === "ACTIVE" && (
        <td class="py-2 border-b border-gray-200 bg-white text-sm">
          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
            <div className="flex items-center">
              <span class="relative mr-1">Active</span>
              <IoMdArrowDropdown />
            </div>
          </span>
        </td>
      )}
      {data.status === "SUSPENSION" && (
        <td class="py-2 border-b border-gray-200 bg-white text-sm">
          <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
            <span aria-hidden class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
            <div className="flex items-center">
              <span class="relative">Suspension</span>
              <IoMdArrowDropdown />
            </div>
          </span>
        </td>
      )}
      {data.status === "BAN" && (
        <td class="py-2 bg-white text-sm">
          <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
            <div className="flex items-center">
              <span class="relative">Ban</span>
              <IoMdArrowDropdown />
            </div>
          </span>
        </td>
      )}
      {data.status === "QUIT" && (
        <td class="py-2 bg-white text-sm">
          <span class="relative inline-block px-3 py-1 font-semibold text-amber-900 leading-tight">
            <span aria-hidden class="absolute inset-0 bg-amber-200 opacity-50 rounded-full"></span>
            <div className="flex items-center">
              <span class="relative">Quit</span>
              <IoMdArrowDropdown />
            </div>
          </span>
        </td>
      )}
      <td class="px-3 py-2 border-b border-gray-200 bg-white text-sm">
        <HiOutlinePencilAlt class="text-blue-500 text-lg" />
      </td>
    </tr>
  );
};

export default TableItem;
