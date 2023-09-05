import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ROOT_API } from "../../constants/api";
import ItemReport from "../ItemReport";
import Modal from "./Modal";

const ModalReportDetail = ({ setModalDetail, id, type }) => {
  const token = localStorage.getItem("admin");
  const [page, setPage] = useState(0);

  const handlePage = (type) => {
    if (type === "prev" && page > 0) {
      setPage(page - 1);
    } else if (type === "next" && page < data.totalPages - 1) {
      setPage(page + 1);
    }
  };
  const handleModalDetail = () => {
    setModalDetail((prev) => !prev);
  };

  async function getReportDetailList() {
    if (type === "user") {
      const { data } = await axios.get(`${ROOT_API}/admin/reports/user`, {
        params: { reportedUserId: id, page: page, size: 10 },
        headers: {
          "Content-Type": "application/json",
          "X-AUTH-TOKEN": token,
        },
      });
      return data;
    } else if (type === "board") {
      const { data } = await axios.get(`${ROOT_API}/admin/reports/post`, {
        params: { reportedPostId: id, page: page, size: 10 },
        headers: {
          "Content-Type": "application/json",
          "X-AUTH-TOKEN": token,
        },
      });
      return data;
    }
  }

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["reportDetailList"],
    queryFn: getReportDetailList,
  });

  useEffect(() => {
    refetch();
  }, [page]);

  useEffect(() => {
    setPage(0);
    refetch();
  }, [type]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error...</div>;

  return (
    <Modal handleModal={handleModalDetail}>
      <Modal.Header>신고 상세내용</Modal.Header>
      <Modal.Body>
        <div className="shadow rounded-lg">
          <div className="">
            <div>
              <div className="flex px-4 py-3 border-b-2 border-gray-200 bg-gray-100">
                <div className="w-52 text-left text-xs font-semibold text-gray-600">NICKNAME</div>
                <div className="w-80 text-left text-xs font-semibold text-gray-600">CREATE_DATE</div>
                <div className="w-52 text-left text-xs font-semibold text-gray-600">REPORT_TYPE</div>
                <div className="w-96 text-left text-xs font-semibold text-gray-600">DETAIL</div>
              </div>
            </div>
            <ul>
              {data &&
                (data.totalElements ? (
                  data.content.map((user, index) => <ItemReport key={index} data={user}/>)
                ) : (
                  <li>등록된 유저가 없습니다.</li>
                ))}
            </ul>
          </div>
          <div className="px-2 py-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <div className="inline-flex">
              <span className="mr-4 py-2 text-xs font-semibold text-gray-600">{page + 1} page</span>
              <button
                onClick={() => handlePage("prev")}
                className="bg-gray-300 hover:bg-gray-400 text-xs font-semibold text-gray-600 py-2 px-4 rounded-l"
              >
                Prev
              </button>
              <button
                onClick={() => handlePage("next")}
                className="bg-gray-300 hover:bg-gray-400 text-xs font-semibold text-gray-600 py-2 px-4 rounded-r"
              >
                Next
              </button>
              <span className="ml-4 py-2 text-xs font-semibold text-gray-600">
                {data && (data.totalPages === 0 ? "1 page" : `${data.totalPages} page`)}
              </span>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalReportDetail;
