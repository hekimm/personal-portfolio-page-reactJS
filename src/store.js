import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import projectsReducer from "./reducers/projectsReducer";
import loadingReducer from "./reducers/loadingReducer";

import themeReducer from "./reducers/themeSlice"; // yeni import
import themeToggleReducer from "./reducers/themeToggleSlice";
import languageReducer from "./reducers/languageSlice";

const rootReducer = combineReducers({
  projects: projectsReducer,
  loading: loadingReducer,
  theme: themeReducer, // yeni state slice
  themeToggle: themeToggleReducer,
  language: languageReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
