// const initialState = {};

// const lastMessageReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_LAST_MESSAGES":
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default lastMessageReducer;

const initialState = {};

const lastMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LAST_MESSAGES":
      const transformed = {};
      action.payload.forEach(msg => {
        transformed[msg._id] = msg;
      });
      return transformed;
    default:
      return state;
  }
};

export default lastMessageReducer;
