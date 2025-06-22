// const MsgReducer=(state={
//     virat:'hi',
    
// },action)=>{
//   if(action.type=='msg'){
//     state=action.playload
//   }
//     return state;
// }
// export default MsgReducer

// const MsgReducer = (state = { virat: "hi" }, action) => {
//     if (action.type === "msg") {
//         return { ...state, message: action.playload };
//     }
//     return state;
// };
// export default MsgReducer


// const MsgReducer = (state = [], action) => {
//   if (action.type === "msg") {
//     return Array.isArray(action.payload) ? action.payload : [action.payload];
//   }
//   return state;
// };

// export default MsgReducer;

// const MsgReducer = (state = [], action) => {
//   switch (action.type) {
//     case "msg":
//       return action.payload; // assuming payload is an array of messages
//     case "clear_messages":
//       return [];
//     default:
//       return state;
//   }
// };

// export default MsgReducer;
// Example MsgReducer.js
// const MsgReducer = (state = [], action) => {
//   switch (action.type) {
//     case "msg":
//       if (Array.isArray(action.payload)) {
//         // If payload is an array, replace all messages (initial fetch)
//         return action.payload;
//       } else {
//         // If payload is a single message, append it
//         return [...state, action.payload];
//       }
//     case "clear_messages":
//       return [];
//     default:
//       return state;
//   }
// };

// export default MsgReducer;
const MsgReducer = (state = {}, action) => {
  switch (action.type) {
    case "msg":
      const { chatRoomId, messages } = action.payload;

      if (!chatRoomId) return state;

      if (Array.isArray(messages)) {
        // Set initial messages for a chat
        return { ...state, [chatRoomId]: messages };
      } else {
        // Append new incoming message
        return {
          ...state,
          [chatRoomId]: [...(state[chatRoomId] || []), messages],
        };
      }

    default:
      return state;
  }
};

export default MsgReducer;

