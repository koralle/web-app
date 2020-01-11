import { createSlice } from '@reduxjs/toolkit';

const articleListModule = createSlice({
  name: "articleList",
  initialState: {
    mainMenuList: ["1"],
    mainMenus: {
      "1": {
        id: "1",
        secondMenuList: [],
        thirdMenuList: [],
        isDropDownOpen: false,
      }
    },

    articles: {
      "1": {
        id: "1",
        title: "",
        content: "",
      }
    },
    nextId: 2,
  },
  reducers: {
    addNewMainMenu: (state, action) => {
      const newId = String(state.nextId++);
      const newArticle = {
        id: newId,
        title: "",
        content: ""
      };

      const newMainMenu = {
        id: newId,
        secondMenuList: [],
        thirdMenuList: [],
        isDropDownOpen: false,
      }
      state.articles[newId] = newArticle;
      state.mainMenus[newId] = newMainMenu;
      state.mainMenuList.push(newId);
      if (state.mainMenus[String(action.payload)].isDropDownOpen === true) {
        state.mainMenus[String(action.payload)].isDropDownOpen = false;
      }
    },
    addNewSecondMenu: (state, action) => {
      const newId = String(state.nextId++);
      const newArticle = {
        id: newId,
        title: "",
        content: "",
      };
      state.articles[newId] = newArticle;
      state.mainMenus[String(action.payload)].secondMenuList.push(newId);

      if (state.mainMenus[String(action.payload)].isDropDownOpen === true) {
        state.mainMenus[String(action.payload)].isDropDownOpen = false;
      }
    },
    addNewThirdMenu: (state, action) => {
      const newId = String(state.nextId++);
      const newArticle = {
        id: newId,
        title: "",
        content: "",
      }
      state.articles[newId] = newArticle;
      state.mainMenus[String(action.payload)].thirdMenuList.push(newId);

      if (state.mainMenus[String(action.payload)].isDropDownOpen === true) {
        state.mainMenus[String(action.payload)].isDropDownOpen = false;
      }
    },
    toggleIsOpen: (state, action) => {
      if (state.mainMenus[String(action.payload)].isDropDownOpen === false) {
        state.mainMenus[String(action.payload)].isDropDownOpen = true;
      } else {
        state.mainMenus[String(action.payload)].isDropDownOpen = false;
      }
    },
    saveArticle: (state, action) => {
      state.articles[String(action.payload.id)].title = action.payload.title;
      state.articles[String(action.payload.id)].content = action.payload.content;
    },
    saveArticleTitle: (state, action) => {
      state.articles[String(action.payload.id)].title = action.payload.text;
    },
    saveArticleContent: (state, action) => {
      state.articles[String(action.payload.id)].content = action.payload.text;
    }
  }
});

export default articleListModule;