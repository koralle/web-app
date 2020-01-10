import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import editTitleModule from '../../modules/editTitleModule';
import TextField from '@material-ui/core/TextField';

const EditTitle = (props) => {
  const articleId = useSelector(state => state.editTitle.articleId);
  const articles = useSelector(state => state.articleList.articles);
  return (
    <h1> {articles[articleId].title} </h1>
  );
};

const EditTitleForm = (props) => {
  const dispatch = useDispatch();
  const editingText = useSelector(state => state.editTitle.inputText);

  const handleChangeInputText = (e) => {
    dispatch(editTitleModule.actions.handleChangeInputText(e.target.value));
  }

  return (
    <form>
      <TextField
        id="edit-title-field"
        label="Title"
        variant="outlined"
        onChange={handleChangeInputText}
        value={editingText}
      />
    </form>
  );
}

export { EditTitle, EditTitleForm } ;
