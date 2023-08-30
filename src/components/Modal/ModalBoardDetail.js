import axios from "axios";
import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { useQuery } from "react-query";
import { ROOT_API } from "../../constants/api";
import Modal from "./Modal";

const ModalBoardDetail = ({ setModalDetail, id }) => {
  const [post, setPost] = useState({
    userInfo: {},
    imageUrls: [],
  });
  const handleModalDetail = () => {
    setModalDetail(false);
  };
  const handleSubmitDetail = (e) => {
    e.preventDefault();
  };
  async function getBoardDetail() {
    const response = await axios.get(`${ROOT_API}/post/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    let cnt = 0;
    response.data.imagedContent = response.data.content.replace(/<img>/g, (match, capture) => {
      return `<img src=${response.data.imageUrls[cnt++]} />`;
    });
    setPost(response.data);
    console.log(response.data);
  }

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["boardDetail"],
    queryFn: getBoardDetail,
  });

  if (isLoading) return "Loading...";
  if (error) return "error: " + error.message;

  return (
    <Modal handleModal={handleModalDetail} handleSubmit={handleSubmitDetail}>
      <Modal.Header>게시글 상세내용</Modal.Header>
      <Modal.Body>
        <div className="boardInfo flex items-center pb-2 border-b">
          <div className="flex-shrink-0 w-12 h-12 mr-3">
            <img
              className="w-full h-full rounded-full"
              src={
                post.userInfo.userProfile
                  ? post.userInfo.userProfile
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
            />
          </div>
          <div>
            <span>{post.userInfo.nickname}</span>
            <div className="text-gray-500">
              <span className="mr-3">{post.createDate}</span>
              <span>{`조회수 ${post.viewCount}`}</span>
            </div>
          </div>
        </div>
        <div className="py-3 border-b">
          <div className="py-3 text-3xl">{post.title}</div>
          <div dangerouslySetInnerHTML={{ __html: post.imagedContent }}></div>
        </div>

        <div className="pt-3 text-center">
          <div className="inline-block bg-gray-200 rounded-md px-3 py-1 mr-3">
            <div className="flex items-center text-gray-500">
              <AiOutlineStar className="mr-2" />
              <p>{post.favoriteCount}</p>
            </div>
          </div>
          <div className="inline-block bg-gray-200 rounded-md px-3 py-1">
            <div className="flex items-center text-gray-500">
              <FiThumbsUp className="mr-2" />
              <p>{post.recommendCount}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>숨김</Modal.Footer>
    </Modal>
  );
};

export default ModalBoardDetail;
