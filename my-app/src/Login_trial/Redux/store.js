import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
    auth: authReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

console.log('state', store.getState());

export default store;