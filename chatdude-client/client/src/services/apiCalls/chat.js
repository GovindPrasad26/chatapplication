import axios from "axios";

 export function createChat(data){

  return axios.post("https://cha-rsyf.onrender.com/chat/create-chat",data,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token-key")}`
        }
    })
}

// import axios from "axios";

// export function createChat(data) {
//   return axios.post("https://chatapp-2m2w.onrender.com/chat/create-chat", data, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token-key")}`,
//     },
//   });
// }
