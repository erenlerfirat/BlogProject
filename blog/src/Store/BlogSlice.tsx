import { createSlice } from '@reduxjs/toolkit';

interface BlogState{ isRead: Boolean }
    
const initialBlogState : BlogState = { isRead: false }

const blogSlice = createSlice({
    name: 'blog',
    initialState: initialBlogState,
    reducers: {
      AddBlog(state,action) {
        state.isRead = action.payload;
      },
      DeleteBlog(state,action) {
        state.isRead = action.payload;
      },
    },
  });

export const {AddBlog,DeleteBlog} = blogSlice.actions ;
export default blogSlice.reducer;