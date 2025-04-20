import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './ui/uiSlice'
import movieReducer from './movie/movieSlice'
import searchReducer from './search/searchSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    movies: movieReducer,
    search: searchReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch