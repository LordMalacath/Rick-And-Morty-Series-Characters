import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: "",
  character: "",
}

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, { payload }) => { state.characters = payload },
    setCharacter: (state, { payload }) => { state.character = payload },
  }
})

export const {
  setCharacters,
  setCharacter
} = charactersSlice.actions;

export default charactersSlice.reducer;