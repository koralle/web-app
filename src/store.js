import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { isArticleTitleEditingModule, isArticleContentEditingModule } from './modules/isEditingModule';

// rootReducer
const rootReducer = combineReducers({
  isArticleTitleEditing: isArticleTitleEditingModule.reducer,
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
