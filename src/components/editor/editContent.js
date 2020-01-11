import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import editContentModule from '../../modules/editContentModule';
import TextField from '@material-ui/core/TextField';

const EditContent = (props) => {
  const articleId = useSelector(state => state.editContent.articleId);
  const articles = useSelector(state => state.articleList.articles)

  return (
    <p>
      {articles[articleId].content}
    </p>
  );
};
const EditContentForm = (props) => {
  const dispatch = useDispatch();
  const editingText = useSelector(state => state.editContent.inputText);

  const handleChangeInputText = (e) => {
    dispatch(editContentModule.actions.handleChangeInputText(e.target.value));
  }

  return (
    <form noValidate autoComplete="off">
      <TextField
        label="Content"
        variant="outlined"
        multiline
        fullWidth
        onChange={handleChangeInputText}
        value={editingText}
      >
        {editingText}
      </TextField>
    </form>
  );
}

export { EditContent, EditContentForm };