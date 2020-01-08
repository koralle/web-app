import { createSlice } from '@reduxjs/toolkit';

const isDropDownOpenModule = createSlice({
  name: "isDropDownOpen",
  initialState: false,
  reducers: {
    toggleIsOpen: (state, action) => !state,
    dropDownClose: (state, action) => false,
  }
});

export default isDropDownOpenModule;