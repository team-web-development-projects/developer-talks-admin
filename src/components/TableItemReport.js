import React from "react";

const TableItemReport = ({ data, type }) => {
  return (
    <li className="flex items-center px-4 py-2 border-b border-gray-200 bg-white">
      <div className="w-52 text-sm">
        <p className="text-gray-900">{data.reportUserNickname}</p>
      </div>
      <div className="w-80 text-sm">
        <p className="text-gray-900">{data.createDate}</p>
      </div>
      <div className="w-52 text-sm">
        <p className="text-gray-900">{data.reportType}</p>
      </div>
      <div className="w-96 text-sm">
        <p className="text-gray-900">{data.detail}</p>
      </div>
    </li>
  );
};

export default TableItemReport;
