
const initialState = {};

const chatInteractionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CHAT_INTERACTION":
      return {
        ...state,
        [action.payload.userId]: action.payload.time,
      };
    default:
      return state;
  }
};

export default chatInteractionReducer;
