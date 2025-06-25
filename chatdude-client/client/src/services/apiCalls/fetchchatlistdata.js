import axios from "axios";
import store from "../../reduxstore/store";
import ChatCreation from "../../actioncreators/chatcreation";


function fetchChatList(){
 const userdata = axios.get("https://cha-rsyf.onrender.com/chat/getcreatechats",{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token-key")}`
        }
    }).then((res)=>{
     console.log(res.data,'hello all chatlist')
     store.dispatch(ChatCreation(res.data))
    }).catch((error)=>{
   console.log(error)
    })
}
export default fetchChatList;
