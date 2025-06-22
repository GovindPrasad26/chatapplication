// import MessageAction from "../action/messageaction";
// export const MsgActionCreator=(msgdata)=>{
//     MessageAction.playload=msgdata
//     return MessageAction
// }
// // export default MsgActionCreator;

// export const clearMessages = () => ({
//   type: "clear_messages",
// });

// import MessageAction from "../action/messageaction";

// const MsgActionCreator = (msgdata) => {
//   MessageAction.payload = msgdata;
//   return MessageAction;
// };



// export default MsgActionCreator;

const MsgActionCreator = (chatRoomId, messages) => {
  return {
    type: "msg",
    payload: {
      chatRoomId,
      messages,
    },
  };
};

export default MsgActionCreator;
