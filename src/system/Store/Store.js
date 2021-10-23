import { createStore, combineReducers } from "redux"
import { createMigrate, persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/es/storage"

import { reducers } from "../Reducers"

import migrations from "./migration"

const rootReducer = combineReducers(reducers)
const persistConfig = {
  key: "omar_application",
  whitelist: ["productReducer"], // Add Keys of Reducers to Persist \\ If Want Whole State to Persist Remove whitelist
  storage,
  version: 1,
  migrate: createMigrate(migrations, { debug: false }),
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const initialState = {}
const store = createStore(persistedReducer, initialState)
const persistor = persistStore(store)

export { store, persistor }
