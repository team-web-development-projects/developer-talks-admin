import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { ROOT_API } from "../../constants/api";
import Modal from "./Modal";

const ModalBoardDetail = ({ setModalDetail, id }) => {
  const handleModalDetail = () => {
    setModalDetail(false);
  };
  const handleSubmitDetail = (e) => {
    e.preventDefault();
  };
  async function getBoardDetail() {
    const { data } = await axios.get(`${ROOT_API}/post/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  }

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["boardDetail"],
    queryFn: getBoardDetail,
  });
console.log(data);
  return (
    <Modal handleModal={handleModalDetail} handleSubmit={handleSubmitDetail}>
      <Modal.Header>게시글 상세내용</Modal.Header>
      <Modal.Body>
        <p>{data.title}</p>
        <p>{data.content}</p>
      </Modal.Body>
      <Modal.Footer>숨김</Modal.Footer>
    </Modal>
  );
};

export default ModalBoardDetail;
