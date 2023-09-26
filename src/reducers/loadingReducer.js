const initialState = {
  isLoading: false,
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
