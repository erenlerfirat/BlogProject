import { createSlice } from '@reduxjs/toolkit';

const initialBlogState = { isAuthenticated: true }

const blogSlice = createSlice({
    name: 'blog',
    initialState: initialBlogState,
    reducers: {
      login(state) {
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });

export const blogActions = blogSlice.actions ;
export default blogSlice.reducer;