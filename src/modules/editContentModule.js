import { createSlice } from '@reduxjs/toolkit';

const editContentModule = createSlice({
  name: "editContent",
  initialState: {
    articleId: "1",
    content: "",
    isEditing: false,
    inputText: "",
  },
  reducers: {
    displayContent: (state, action) => {
      state.articleId = String(action.payload.id);
      state.content = action.payload.title;
    },
    toggleIsEditing: (state, action) => {
      if (state.isEditing === false) state.isEditing = true;
      else state.isEditing = false;
    },
    handleChangeInputText: (state, action) => {
      state.inputText = action.payload.target.value;
    }
  },
});

export default editContentModule;