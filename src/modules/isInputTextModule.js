import { createSlice } from '@reduxjs/toolkit';

const isInputTitleModule = createSlice({
  name: "isInputTitle",
  initialState: "",
  reducers: {
    inputText: (state, action) => !state
  }
});

const isInputContentModule = createSlice({
  name: "isInputContent",
  initialState: "",
  reducers: {
    inputText: (state, action) => !state
  }
});

export { isInputTitleModule, isInputContentModule };