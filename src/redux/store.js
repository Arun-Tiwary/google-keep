import { combineReducers, configureStore } from "@reduxjs/toolkit";
import keepSlice from "./keepSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  keep: keepSlice,
});

// configuration for redux persist
const persistConfig = {
  key: "keep",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
