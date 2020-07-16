import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers"

const createStore = () => reduxCreateStore(reducers, applyMiddleware(thunk))
export default createStore
