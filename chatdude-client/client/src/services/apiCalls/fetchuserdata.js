// import axios from "axios";
// import store from "../../reduxstore/store";
// import userActionCreator from "../../actioncreators/usercreation";
// function fetchData(){
//  const userdata = axios.get("https://cha-rsyf.onrender.com/users/getAllUsersChats",{
//         headers:{
//             Authorization:`Bearer ${localStorage.getItem("token-key")}`
//         }
//     }).then((res)=>{
//      console.log(res.data,'hello all users')
//      store.dispatch(userActionCreator(res.data))
//     }).catch((error)=>{
//    console.log(error)
//     })
// }
// export default fetchData;
// import axios from "axios";
// import store from "../../reduxstore/store";
// import userActionCreator from "../../actioncreators/usercreation";

// function fetchData() {
//   axios.get("https://cha-rsyf.onrender.com/users/getAllUsersChats", {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token-key")}`,
//     },
//   })
//     .then((res) => {
//       console.log(res.data, '✅ All users fetched');
//       store.dispatch(userActionCreator(res.data));
//     })
//     .catch((error) => {
//       console.error("❌ Failed to fetch users:", error.message);
//     });
// }

// export default fetchData;

import axios from "axios";
import store from "../../reduxstore/store";
import userActionCreator from "../../actioncreators/usercreation";

function fetchData() {
  const userdata = axios.get("https://cha-rsyf.onrender.com/users/getAllUsersChats", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token-key")}`
    }
  })
  .then((res) => {
    console.log(res.data, 'hello all users');
    store.dispatch(userActionCreator(res.data));
  })
  .catch((error) => {
    console.log(error);
  });
}

export default fetchData;



