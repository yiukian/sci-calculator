import { createStore, Store } from "redux";
import { AppState } from ".";
import rootReducers from "./reducers";

function configureStore(): Store<AppState> {
  const store = createStore(rootReducers);
  return store;
}

const store = configureStore();

export default store;
