export const SET_TYPING_TEXT = "SET_TYPING_TEXT";

export const setTypingText = (text) => {
  return {
    type: SET_TYPING_TEXT,
    payload: text,
  };
};
