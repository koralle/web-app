import { createSlice } from '@reduxjs/toolkit';

const editTitleModule = createSlice({
  name: "editTitle",
  initialState: {
    articleId: "1",
    title: "",
    isEditing: false,
    inputText: "",
  },
  reducers: {
    displayTitle: (state, action) => {
      state.articleId = String(action.payload.id);
      state.title = action.payload.title;
    },
    toggleIsEditing: (state, action) => {
      if (state.isEditing === false) state.isEditing = true;
      else state.isEditing = false;
    },
    handleChangeInputText: (state, action) => {
      state.inputText = action.payload;
    },
    clearInputText: (state, action) => {
      state.inputText = "";
    },
    startEdit: (state, action) => {
      state.inputText = action.payload;
    },
  },
});

export default editTitleModule;