import { createSlice } from '@reduxjs/toolkit';

const editArticleModule = createSlice({
  name: "editArticle",
  initialState: {
    articleId: "1",
    title: {
      text: "",
      isEditing: false,
      inputText: "",
    },
    content: {
      content: "",
      isEditing: false,
      inputText: "",
    }
  },
  reducers: {
    displayArticle: (state, action) => {
      state.articleId = String(action.payload.id);
      state.title = {
        text: action.payload.title,
        isEditing: false,
        inputText: action.payload.title,
      }
      state.content = {
        text: action.payload.content,
        isEditing: false,
        inputText: action.payload.content,
      }
    },
    displayTitle: (state, action) => {
      state.articleId = String(action.payload.id);
      state.title = {
        text: action.payload.title,
        isEditing: false,
        inputText: action.payload.title,
      };
    },
    displayContent: (state, action) => {
      state.content = {
        text: action.payload.content,
        isEditing: false,
        inputText: action.payload.content,
      }
    },
    toggleIsEditing: (state, action) => {
      if (state[action.payload].isEditing === false) state[action.payload].isEditing = true;
      else state[action.payload].isEditing = false;
    },
    handleChangeInputText: (state, action) => {
      state[action.payload.editTarget].inputText = action.payload.text;
    },
    clearInputText: (state, action) => {
      state[action.payload].inputText = "";
    },
    setInputText: (state, action) => {
      state[action.payload.editTarget].inputText = action.payload.text;
    }
  },
});

export default editArticleModule;