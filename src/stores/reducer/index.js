import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import counter from "./counter";
import auth from "./auth";
import user from "./user";
import movie from "./movie";
import schedule from "./schedule";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
};

const rootReducer = combineReducers({
  counter,
  auth,
  user,
  movie,
  schedule
});

export default persistReducer(persistConfig, rootReducer);
