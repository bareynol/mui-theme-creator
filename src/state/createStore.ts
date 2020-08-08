import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import thunk from "redux-thunk"
import reducers from "./reducers"

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["themeObject", "editor", "loadedFonts"],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store = reduxCreateStore(persistedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store)
  // persistor.purge()
  return { store, persistor }
}
