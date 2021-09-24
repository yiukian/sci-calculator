import { createStore, Store } from 'redux';
import { AppState } from '.';
import rootReducers from './reducers';


export default function configureStore(): Store<AppState> {
  const store = createStore(
    rootReducers,
  );
  return store;
}


/* 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
 */
