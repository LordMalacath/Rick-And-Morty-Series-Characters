import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  page: 1,
  pages: 1,
  search: "",
  user: ""
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPage: (state, { payload }) => { state.page = payload },
    setPages: (state, { payload }) => { state.pages = payload },
    setSearch: (state, { payload }) => { state.search = payload },
    setUser: (state, { payload }) => { state.user = payload },
  }
})

export const {
  setPage,
  setPages,
  setSearch,
  setUser,
} = appSlice.actions;

export default appSlice.reducer;