// 회원정보 수정과 관련된 api

// import axios from "axios";
// import { useMutation, useQueryClient } from "react-query";
// import { ROOT_API } from "../constants/api";

// const token = localStorage.getItem("admin");

// export const userInfoEditMutation = (userInfo, id, setModalEdit) =>
//   useMutation(
//     () =>
//       axios.put(
//         `${ROOT_API}/admin/users/update/info`,
//         {
//           nickname: userInfo.nickname,
//           email: userInfo.email,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "X-AUTH-TOKEN": token,
//           },
//           params: {
//             id: id,
//           },
//         }
//       ),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(["userList"]);
//         setModalEdit(false);
//       },
//       onError: (err) => {
//         console.log(err.response.data.message);
//       },
//     }
//   );
