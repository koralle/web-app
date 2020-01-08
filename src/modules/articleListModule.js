import { createSlice } from '@reduxjs/toolkit';

class Menu {
  constructor(id, menu_level, title, content) {
    this.id = id;
    this.menu_level = menu_level;
    this.title = title;
    this.content = content;
  }
}

const articleListModule = createSlice({
  name: "articleList",
  initialState: {
    rootArticleList: ["1"],
    nextArticleId: 2,
    mainMenus: {
      "1" : {
        menu: {
          id: "1",
          level: 1,
          title: "",
          content: ""
        },
        secondMenuList: [],
        thirdMenuList: [],
        isDropDownOpen: false,
      }
    },
    secondMenus: {

    },
    thirdMenus: {

    }
  },
  reducers: {
    addNewMainMenu: (state, action) => {
      const tmp_id = String(state.nextArticleId++);
      const tmp = {
        menu: {
          id: tmp_id,
          level: 1,
          title: "",
          content: ""
        },
        secondMenuList: [],
        thirdMenuList: [],
        isDropDownOpen: false,
      };
      state.mainMenus[tmp_id] = tmp;
      state.rootArticleList.push(tmp_id);
      if (state.mainMenus[tmp_id].isDropDownOpen === true) {
        state.mainMenus[tmp_id].isDropDownOpen = false;
      }
    },
    addNewSecondMenu: (state, action) => {
      const tmp_id = String(state.nextArticleId++);
      const tmp = {
        id: tmp_id,
        level: 2,
        title: "",
        content: "",
      };
      state.secondMenus[tmp_id] = tmp;
      state.mainMenus[String(action.payload)].secondMenuList.push(tmp_id);
      if (state.mainMenus[String(action.payload)].isDropDownOpen === true) {
        state.mainMenus[String(action.payload)].isDropDownOpen = false;
      }
    },
    addNewThirdMenu: (state, action) => {
      const tmp_id = String(state.nextArticleId++);
      const tmp = {
        id: tmp_id,
        level: 3,
        title: "",
        content: "",
      }
      state.thirdMenus[tmp_id] = tmp;
      state.mainMenus[String(action.payload)].thirdMenuList.push(tmp_id);
      if (state.mainMenus[String(action.payload)].isDropDownOpen === true) {
        state.mainMenus[String(action.payload)].isDropDownOpen = false;
      }
    },
    toggleIsOpen: (state, action) => {
      console.log(state.mainMenus[String(action.payload)].isDropDownOpen);
      if (state.mainMenus[String(action.payload)].isDropDownOpen === false) {
        state.mainMenus[String(action.payload)].isDropDownOpen = true;
      }
      else {
        state.mainMenus[String(action.payload)].isDropDownOpen = false;
      }
    },
  }
});

export default articleListModule;