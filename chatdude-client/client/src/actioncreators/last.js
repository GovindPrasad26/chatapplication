
export const updateChatInteraction = (userId) => ({
  type: "UPDATE_CHAT_INTERACTION",
  payload: { userId, time: Date.now() },
});
