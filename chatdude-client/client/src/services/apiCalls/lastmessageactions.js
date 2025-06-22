// import axios from 'axios';

// export const fetchLastMessages = () => async (dispatch) => {
//   try {
//     const res = await axios.get("http://localhost:5665/chat/lastmessages", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token-key")}`,
//       },
//     });

//     dispatch({
//       type: "SET_LAST_MESSAGES",
//       payload: res.data.result, // { chatRoomId: lastMessageObj, ... }
//     });
//   } catch (err) {
//     console.error("Error fetching last messages:", err);
//   }
// };

import axios from 'axios';

export const fetchLastMessages = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5665/chat/lastmessages", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token-key")}`,
      },
    });

    dispatch({
      type: "SET_LAST_MESSAGES",
      payload: res.data.result, // Array of last messages
    });
  } catch (err) {
    console.error("Error fetching last messages:", err);
  }
};
