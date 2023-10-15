import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import projectsReducer from "./reducers/projectsReducer";
import loadingReducer from "./reducers/loadingReducer";
import typingReducer from "./reducers/typingSlice";
import themeReducer from "./reducers/themeSlice"; // yeni import
import themeToggleReducer from "./reducers/themeToggleSlice";
import languageReducer from "./reducers/languageSlice";
import mediumPostsReducer from "./reducers/mediumPostsSlice"; // New import

const rootReducer = combineReducers({
  projects: projectsReducer,
  loading: loadingReducer,
  typing: typingReducer,
  theme: themeReducer, // yeni state slice
  themeToggle: themeToggleReducer,
  language: languageReducer,
  message: messageReducer,
  mediumPosts: mediumPostsReducer, // New state slice
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
