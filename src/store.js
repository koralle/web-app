import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { isArticleTitleEditingModule, isArticleContentEditingModule } from './modules/isEditingModule';
import isDropDownOpenModule from './modules/isDropDownOpenModule';
import articleListModule from './modules/articleListModule';

// rootReducer
const rootReducer = combineReducers({
  articleList: articleListModule.reducer,

  // ドロップダウンメニューは開いているか閉じているか
  isDropDownOpen: isDropDownOpenModule.reducer,

  // 記事タイトルは編集中か保存済みか
  isArticleTitleEditing: isArticleTitleEditingModule.reducer,

  // 記事本文はは編集中か保存済みか
  isArticleContentEditing: isArticleContentEditingModule.reducer
});

export const setupStore = () => {
  const middlewares = [...getDefaultMiddleware(), logger];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });
  return store
}
