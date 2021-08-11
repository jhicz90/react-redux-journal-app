import { createStore, combineReducers } from "redux";
import { AuthReducer } from "../reducers/AuthReducer";

const reducers = combineReducers({
    auth: AuthReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)