import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import editContentModule from '../../modules/editContentModule';

const EditContent = (props) => {
  const articleId = useSelector(state => state.editContent.articleId);
  const articles = useSelector(state => state.articleList.articles)
  
  return (
    <code> {articles[articleId].content} </code>
  );
};
const EditContentForm = (props) => {
  const dispatch = useDispatch();
  const editingText = useSelector(state => state.editContent.inputText);

  const handleChangeInputText = (e) => {
    dispatch(editContentModule.actions.handleChangeInputText(e));
  }

  return (
    <textarea onChange={handleChangeInputText}>{editingText}</textarea>
  );
}

export { EditContent, EditContentForm };