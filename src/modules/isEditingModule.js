import { createSlice } from '@reduxjs/toolkit';

const isArticleTitleEditingModule = createSlice({
  name: "isArticleTitleEditing",
  initialState: false,
  reducers: {
    toggleIsEditing: (state, action) => !state
  }
});

const isArticleContentEditingModule = createSlice({
  name: "isArticleContentEditing",
  initialState: false,
  reducers: {
    toggleIsEditing: (state, action) => !state
  }
});

export { isArticleTitleEditingModule, isArticleContentEditingModule };