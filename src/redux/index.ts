import { calculatorObject } from "./logic";
import store from "./store";

export * as actionCreators from "./actions";
export * from "./reducers";
export * from "./store";

export type AppState = {
  keys: calculatorObject;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
