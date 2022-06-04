import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);
console.log(`state`, store.getState());

export default store;
