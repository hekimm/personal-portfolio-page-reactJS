import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default olarak localStorage kullanır
import thunk from "redux-thunk";
import projectsReducer from "./reducers/projectsReducer";
import loadingReducer from "./reducers/loadingReducer";
import typingReducer from "./reducers/typingSlice";
import themeReducer from "./reducers/themeSlice"; // yeni import
import themeToggleReducer from "./reducers/themeToggleSlice";
import languageReducer from "./reducers/languageSlice";
import messageReducer from "./reducers/messageSlice";
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

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "projects",
    "loading",
    "typing",
    "theme",
    "themeToggle",
    "language",
    "message",
  ], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;
